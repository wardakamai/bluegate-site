import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0E3A5F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '36px',
          gap: '4px',
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: '-3px',
            lineHeight: 1,
            fontFamily: 'serif',
          }}
        >
          BG
        </span>
        <span
          style={{
            color: '#B8893B',
            fontSize: 18,
            fontWeight: 400,
            letterSpacing: '5px',
            lineHeight: 1,
            fontFamily: 'sans-serif',
            textTransform: 'uppercase',
          }}
        >
          SHIPPING
        </span>
      </div>
    ),
    { ...size },
  )
}
