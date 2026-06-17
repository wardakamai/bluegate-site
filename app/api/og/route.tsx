import { ImageResponse } from 'next/og'
import { type NextRequest } from 'next/server'

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') ?? 'Blue Gate Shipping & Trade B.V.'

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0C0C0F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
        }}
      >
        {/* Brand bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              background: '#D00018',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              color: '#D00018',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            BLUE GATE SHIPPING AND TRADE B.V.
          </span>
        </div>

        {/* Main title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span
            style={{
              color: '#F0EAE0',
              fontSize: title.length > 42 ? 42 : 56,
              fontWeight: 400,
              lineHeight: 1.15,
              maxWidth: 960,
            }}
          >
            {title}
          </span>
          <span
            style={{
              color: '#D00018',
              fontSize: 17,
              letterSpacing: '0.04em',
            }}
          >
            Oil Tank Farm. Terminal Operations. Since 1964.
          </span>
        </div>

        {/* Footer bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #1A1A1E',
            paddingTop: '24px',
          }}
        >
          <span style={{ color: '#3A3A45', fontSize: 14 }}>
            bluegou.com
          </span>
          <span style={{ color: '#3A3A45', fontSize: 14 }}>
            Rotterdam · Prinsenlaan 450
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
