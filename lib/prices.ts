import yahooFinance from 'yahoo-finance2'

export type Instrument = {
  symbol: string
  name: string
  sourceCode: string
  unit: string
}

export const instruments: Instrument[] = [
  {
    symbol: 'BZ=F',
    name: 'Brent Crude',
    sourceCode: 'ICE Brent Futures (BZ=F)',
    unit: 'per barrel',
  },
  {
    symbol: 'CL=F',
    name: 'WTI Crude',
    sourceCode: 'NYMEX WTI Futures (CL=F)',
    unit: 'per barrel',
  },
  {
    symbol: 'HO=F',
    name: 'Gasoil / Heating Oil',
    sourceCode: 'NYMEX Heating Oil (HO=F)',
    unit: 'per gallon',
  },
  {
    symbol: 'NG=F',
    name: 'Natural Gas',
    sourceCode: 'NYMEX Henry Hub (NG=F)',
    unit: 'per MMBtu',
  },
]

export type Quote = {
  symbol: string
  name: string
  sourceCode: string
  unit: string
  price: number
  change: number
  changePercent: number
  asOf: string // ISO timestamp
}

export async function fetchQuotes(): Promise<Quote[]> {
  const symbols = instruments.map((i) => i.symbol)
  try {
    const results = await yahooFinance.quote(symbols)
    const raw = Array.isArray(results) ? results : [results]
    const quoteMap = new Map(raw.map((q) => [q.symbol, q]))

    return instruments.map((inst) => {
      const q = quoteMap.get(inst.symbol)
      const time = q?.regularMarketTime
      const asOf =
        time instanceof Date
          ? time.toISOString()
          : typeof time === 'number'
            ? new Date(time * 1000).toISOString()
            : new Date().toISOString()

      return {
        symbol: inst.symbol,
        name: inst.name,
        sourceCode: inst.sourceCode,
        unit: inst.unit,
        price: q?.regularMarketPrice ?? 0,
        change: q?.regularMarketChange ?? 0,
        changePercent: q?.regularMarketChangePercent ?? 0,
        asOf,
      }
    })
  } catch {
    return []
  }
}

export function brentWtiSpread(quotes: Quote[]): number | null {
  const brent = quotes.find((q) => q.symbol === 'BZ=F')?.price
  const wti = quotes.find((q) => q.symbol === 'CL=F')?.price
  return brent && wti ? +(brent - wti).toFixed(2) : null
}
