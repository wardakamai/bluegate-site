import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0E3A5F',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
        }}
      >
        <span
          style={{
            color: '#B8893B',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '-0.5px',
            lineHeight: 1,
            fontFamily: 'serif',
          }}
        >
          BG
        </span>
      </div>
    ),
    { ...size },
  )
}
