const brands = ['Bloom Café', '온도', 'Mungy', '소담', 'Haru & Co', 'PLI']

export default function PartnerMarquee() {
  const brandStyles = [
    { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '30px' },
    { fontFamily: 'var(--font-korean)', fontWeight: 600, fontSize: '26px' },
    { fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '26px', letterSpacing: '-0.02em' },
    { fontFamily: 'var(--font-korean)', fontWeight: 600, fontSize: '26px' },
    { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '30px' },
    { fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '26px', letterSpacing: '-0.02em' },
  ]

  const items = [...brands, ...brands]

  return (
    <section style={{ padding: '46px 0', background: '#F5F5F3' }}>
      <p
        style={{
          textAlign: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.28em',
          color: 'rgba(26,26,26,0.45)',
          margin: '0 0 28px',
        }}
      >
        함께한 브랜드들 · TRUSTED BY
      </p>
      <div style={{ overflow: 'hidden', display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            animation: 'marquee 30s linear infinite',
          }}
        >
          {items.map((brand, i) => (
            <span
              key={i}
              style={{
                ...brandStyles[i % brandStyles.length],
                color: 'rgba(26,26,26,0.4)',
                padding: '0 44px',
              }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
