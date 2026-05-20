'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: '#0C0C0F',
          color: '#F0EAE0',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          display: 'flex',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          margin: 0,
        }}
      >
        <div style={{ maxWidth: 560, textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'monospace',
              fontSize: 11,
              letterSpacing: '0.1em',
              color: '#D00018',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            500 — Server error
          </p>

          <h1
            style={{
              fontSize: 48,
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              margin: '0 0 1.25rem',
            }}
          >
            Something went{' '}
            <em style={{ color: '#D00018', fontStyle: 'italic' }}>wrong.</em>
          </h1>

          <p
            style={{
              color: '#8A8A9A',
              marginBottom: '2rem',
              lineHeight: 1.6,
              fontSize: 16,
            }}
          >
            An unexpected error occurred. For urgent storage or trading requests, please
            contact{' '}
            <a
              href="mailto:storage@bluegou.com"
              style={{ color: '#D00018', textDecoration: 'none' }}
            >
              storage@bluegou.com
            </a>{' '}
            directly.
          </p>

          <button
            onClick={reset}
            style={{
              background: '#D00018',
              color: '#ffffff',
              border: 'none',
              borderRadius: 8,
              padding: '12px 28px',
              fontSize: 14,
              fontFamily: 'system-ui, sans-serif',
              cursor: 'pointer',
              letterSpacing: '0.01em',
            }}
          >
            Try again →
          </button>
        </div>
      </body>
    </html>
  )
}
