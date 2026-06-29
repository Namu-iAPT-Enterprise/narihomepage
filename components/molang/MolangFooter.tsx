const studioLinks = [
  { label: '서비스', href: '#system' },
  { label: '작업물', href: '#uses' },
  { label: '소개', href: '#promise' },
]

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Behance', href: '#' },
  { label: '문의하기', href: '#contact' },
]

export default function MolangFooter() {
  return (
    <footer style={{ background: '#1A1A1A', color: '#FFFDF0', padding: '64px 40px 0', overflow: 'hidden' }}>
      {/* Top row */}
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '30px',
        }}
      >
        {/* Brand */}
        <div style={{ maxWidth: '320px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '12px' }}>
            <span style={{ fontFamily: 'var(--font-korean)', fontWeight: 700, fontSize: '24px' }}>
              몰랑 스튜디오
            </span>
            <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#AF98FF' }}>
              MOLANG STUDIO
            </span>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '18px',
              color: 'rgba(255,253,240,0.5)',
              margin: 0,
            }}
          >
            We build brands through characters.
          </p>
        </div>

        {/* Nav columns */}
        <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.24em',
                color: 'rgba(255,253,240,0.4)',
              }}
            >
              STUDIO
            </span>
            {studioLinks.map(({ label, href }) => (
              <a key={label} href={href} className="footer-link">
                {label}
              </a>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.24em',
                color: 'rgba(255,253,240,0.4)',
              }}
            >
              SOCIAL
            </span>
            {socialLinks.map(({ label, href }) => (
              <a key={label} href={href} className="footer-link">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '24px 0',
          borderTop: '1px solid rgba(255,253,240,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '12px',
          color: 'rgba(255,253,240,0.4)',
        }}
      >
        <span>© 2026 몰랑 스튜디오. All rights reserved.</span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '15px',
          }}
        >
          캐릭터로 브랜드를 만드는 스튜디오
        </span>
      </div>
    </footer>
  )
}
