const pillars = [
  {
    bg: '#785DFF',
    titleKo: '컨셉부터 제작까지',
    desc: '스케치부터 양산 감리까지 한 팀이 끝까지 동행합니다.',
  },
  {
    bg: '#FF9AEA',
    titleKo: '명확한 사용 가이드',
    desc: '누구나 따라 쓸 수 있는 가이드를 함께 드립니다.',
  },
  {
    bg: '#FFDB00',
    titleKo: '저작권은 브랜드에게',
    desc: '완성된 캐릭터의 권리는 온전히 브랜드의 것입니다.',
  },
  {
    bg: '#FE6900',
    titleKo: '굿즈 양산까지 책임',
    desc: '검증된 제작처와 함께 실물 품질까지 챙깁니다.',
  },
]

export default function PromiseSection() {
  return (
    <section id="promise" style={{ padding: '110px 40px', background: '#fff' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <div className="gsap-fade-up" style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.3em',
              color: '#785DFF',
              marginBottom: '16px',
            }}
          >
            — 소개
          </div>
          <h2
            style={{
              margin: 0,
              fontFamily: 'var(--font-korean)',
              fontWeight: 700,
              fontSize: 'clamp(28px,3.8vw,54px)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            브랜드를 위한 스튜디오.
            <br />
            처음부터 끝까지.
          </h2>
        </div>

        <div className="gsap-pillars" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '22px' }}>
          {pillars.map((p) => (
            <div key={p.titleKo} className="gsap-pillar" style={{ textAlign: 'center', padding: '14px' }}>
              <div
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '22px',
                  background: p.bg,
                  margin: '0 auto 22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '30px',
                    background: '#fff',
                    borderRadius: '50% 50% 47% 47%',
                  }}
                />
              </div>
              <h4
                style={{
                  margin: '0 0 8px',
                  fontFamily: 'var(--font-korean)',
                  fontWeight: 700,
                  fontSize: '18px',
                }}
              >
                {p.titleKo}
              </h4>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.7, color: 'rgba(26,26,26,0.6)' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
