const navLinks = [
  { label: '서비스', href: '#system' },
  { label: '작업물', href: '#uses' },
  { label: '소개', href: '#promise' },
]

export default function MolangNav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 40px',
        background: 'rgba(255,253,240,0.86)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(26,26,26,0.06)',
      }}
    >
      {/* Wordmark */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
        <span
          style={{
            fontFamily: 'var(--font-korean)',
            fontWeight: 700,
            fontSize: '25px',
            letterSpacing: '-0.01em',
            color: '#1A1A1A',
          }}
        >
          몰랑
        </span>
        <span
          style={{
            fontSize: '10px',
            letterSpacing: '0.34em',
            fontWeight: 600,
            color: '#785DFF',
          }}
        >
          STUDIO
        </span>
      </div>

      {/* Nav links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '34px' }}>
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="nav-link"
            style={{ fontFamily: 'var(--font-korean)', fontSize: '15px', color: '#1A1A1A' }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* CTAs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <a
          href="#contact"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            fontWeight: 500,
            color: '#1A1A1A',
            textDecoration: 'none',
          }}
        >
          Login
        </a>
        <a
          href="#contact"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            fontWeight: 600,
            color: '#FFFDF0',
            background: '#1A1A1A',
            padding: '10px 22px',
            borderRadius: '100px',
            textDecoration: 'none',
            transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          문의하기
        </a>
      </div>
    </nav>
  )
}
