import yahooFinance from 'yahoo-finance2';

export type PriceTick = {
  symbol: string;
  label: string;
  price: number | null;
  currency: string;
  change: number | null;
  changePercent: number | null;
};

const TICKERS: { symbol: string; label: string }[] = [
  { symbol: 'BZ=F', label: 'Brent Crude' },
  { symbol: 'CL=F', label: 'WTI Crude' },
  { symbol: 'NG=F', label: 'Natural Gas' },
  { symbol: 'HO=F', label: 'Heating Oil' },
];

export async function fetchPrices(): Promise<PriceTick[]> {
  const symbols = TICKERS.map((t) => t.symbol);

  try {
    const results = await yahooFinance.quote(symbols);
    const quotes = Array.isArray(results) ? results : [results];

    return TICKERS.map((ticker, i) => {
      const quote = quotes[i];
      return {
        symbol: ticker.symbol,
        label: ticker.label,
        price: quote?.regularMarketPrice ?? null,
        currency: quote?.currency ?? 'USD',
        change: quote?.regularMarketChange ?? null,
        changePercent: quote?.regularMarketChangePercent ?? null,
      };
    });
  } catch {
    return TICKERS.map((ticker) => ({
      symbol: ticker.symbol,
      label: ticker.label,
      price: null,
      currency: 'USD',
      change: null,
      changePercent: null,
    }));
  }
}
