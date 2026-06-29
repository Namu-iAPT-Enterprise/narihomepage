export default function AdVideoShowcase() {
  return (
    <section style={{ padding: '80px 40px', background: '#FFFFFF', color: '#1A1A1A' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: '#785DFF',
            marginBottom: '18px',
          }}
        >
          — 스튜디오 소개
        </div>
        <h2
          style={{
            margin: '0 0 42px',
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(40px,5.5vw,80px)',
            lineHeight: 0.96,
            letterSpacing: '-0.02em',
          }}
        >
          Meet the Studio
        </h2>

        <div
          className="gsap-video-wrap"
          style={{
            position: 'relative',
            aspectRatio: '16/9',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 60px 120px rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,253,240,0.08)',
          }}
        >
          <video
            controls
            preload="metadata"
            poster="/characters/molang-duo.png"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          >
            <source src="/videos/promo.mp4" type="video/mp4" />
          </video>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '18px',
            color: 'rgba(26,26,26,0.5)',
            margin: '20px 0 0',
          }}
        >
          A 40-second loop of two little blobs learning to run a design studio.
        </p>
      </div>
    </section>
  )
}
