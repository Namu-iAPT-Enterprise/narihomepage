export default function StatementSection() {
  return (
    <section style={{ padding: '130px 40px 110px', background: '#FFFDF0' }}>
      <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: '#785DFF',
            marginBottom: '26px',
          }}
        >
          — 우리의 관점
        </div>

        <h2
          className="gsap-statement-heading"
          style={{
            margin: 0,
            fontFamily: 'var(--font-korean)',
            fontWeight: 700,
            fontSize: 'clamp(30px,4.4vw,64px)',
            lineHeight: 1.26,
            letterSpacing: '-0.025em',
          }}
        >
          브랜드엔 더 많은{' '}
          <span
            style={{
              background: '#FF9AEA',
              borderRadius: '0.14em',
              padding: '0.02em 0.14em',
              WebkitBoxDecorationBreak: 'clone',
              boxDecorationBreak: 'clone',
            }}
          >
            캐릭터
          </span>
          가 아니라,
          <br />
          하나의{' '}
          <span
            style={{
              background: '#AF98FF',
              borderRadius: '0.14em',
              padding: '0.02em 0.14em',
              WebkitBoxDecorationBreak: 'clone',
              boxDecorationBreak: 'clone',
            }}
          >
            세계관
          </span>
          이 필요합니다.
        </h2>

        {/* Scribble divider */}
        <svg
          viewBox="0 0 600 60"
          style={{ width: 'min(560px,80%)', height: 'auto', margin: '40px auto 0', display: 'block' }}
          fill="none"
        >
          <path
            className="gsap-scribble"
            d="M8 40 C 80 6, 130 6, 175 34 C 210 56, 250 56, 285 30 C 320 6, 360 6, 400 36 C 440 60, 500 50, 592 16"
            stroke="#1A1A1A"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        {/* Two-col text */}
        <div
          className="gsap-fade-up"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '36px',
            maxWidth: '780px',
            margin: '46px auto 0',
            textAlign: 'left',
          }}
        >
          <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.85, color: 'rgba(26,26,26,0.66)' }}>
            오늘날 브랜드의 캐릭터는 여기저기 흩어져 있습니다. 스티커 따로, 굿즈 따로, 가이드 따로. 연결되지 않은 캐릭터는 금방 잊혀집니다.
          </p>
          <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.85, color: 'rgba(26,26,26,0.66)' }}>
            몰랑은 그 틈을 메웁니다. 하나의 성격, 하나의 표정, 하나의 목소리로 — 캐릭터가 브랜드 전체를 대신 말하게 합니다.
          </p>
        </div>
      </div>
    </section>
  )
}
