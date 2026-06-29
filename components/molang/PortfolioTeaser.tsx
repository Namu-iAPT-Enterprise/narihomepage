const useCases = [
  {
    bg: '#785DFF',
    titleEn: 'Café & Retail',
    titleKo: '카페·리테일',
    textColor: '#fff',
    decor: { type: 'circle', color: '#FFDB00', pos: { right: '-20px', top: '-20px' } },
    mini: { type: 'rect', w: '64px', h: '46px', pos: { left: '18px', top: '18px' } },
  },
  {
    bg: '#00EFAB',
    titleEn: 'Stickers',
    titleKo: '메신저 스티커',
    textColor: '#1A1A1A',
    decor: { type: 'triangle', color: '#785DFF', pos: { right: '18px', top: '18px' } },
    mini: null,
  },
  {
    bg: '#FF9AEA',
    titleEn: 'Stationery',
    titleKo: '문구·굿즈',
    textColor: '#1A1A1A',
    decor: { type: 'circle', color: '#00B4FB', pos: { left: '-20px', bottom: '-20px' } },
    mini: { type: 'rect', w: '48px', h: '60px', pos: { right: '18px', top: '18px' } },
  },
  {
    bg: '#00B4FB',
    titleEn: 'Digital IP',
    titleKo: '디지털 IP',
    textColor: '#fff',
    decor: { type: 'circle', color: '#FFDB00', pos: { right: '-18px', bottom: '-18px' } },
    mini: { type: 'rect', w: '54px', h: '36px', pos: { left: '18px', top: '18px' } },
  },
  {
    bg: '#FFDB00',
    titleEn: 'Campaigns',
    titleKo: '브랜드 캠페인',
    textColor: '#1A1A1A',
    decor: { type: 'square', color: '#FF9AEA', pos: { right: '18px', top: '18px' } },
    mini: null,
  },
  {
    bg: '#FE6900',
    titleEn: 'Collabs',
    titleKo: '콜라보레이션',
    textColor: '#fff',
    decor: { type: 'circle', color: '#00EFAB', pos: { left: '-18px', top: '-18px' } },
    mini: null,
  },
]

export default function PortfolioTeaser() {
  return (
    <section id="uses" style={{ padding: '110px 40px', background: '#FFFDF0' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        {/* Header */}
        <div className="gsap-fade-up" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 52px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.3em',
              color: '#785DFF',
              marginBottom: '16px',
            }}
          >
            — 작업물
          </div>
          <h2
            style={{
              margin: '0 0 16px',
              fontFamily: 'var(--font-korean)',
              fontWeight: 700,
              fontSize: 'clamp(28px,3.8vw,54px)',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
            }}
          >
            하나의 캐릭터가 닿는 모든 곳
          </h2>
          <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.7, color: 'rgba(26,26,26,0.6)' }}>
            카페 간판부터 메신저 스티커까지 — 몰랑의 캐릭터는 어디서나 같은 얼굴로 인사합니다.
          </p>
        </div>

        {/* 3×2 grid */}
        <div
          className="gsap-uc-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '22px',
          }}
        >
          {useCases.map((uc) => (
            <div
              key={uc.titleEn}
              className="uc-tile gsap-uc-card"
              style={{
                borderRadius: '22px',
                overflow: 'hidden',
                background: uc.bg,
                aspectRatio: '4/3',
                position: 'relative',
                transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              {/* Decor */}
              {uc.decor.type === 'circle' && (
                <div
                  style={{
                    position: 'absolute',
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    background: uc.decor.color,
                    opacity: 0.85,
                    pointerEvents: 'none',
                    ...uc.decor.pos,
                  }}
                />
              )}
              {uc.decor.type === 'triangle' && (
                <div
                  style={{
                    position: 'absolute',
                    width: 0,
                    height: 0,
                    borderLeft: '24px solid transparent',
                    borderRight: '24px solid transparent',
                    borderBottom: `42px solid ${uc.decor.color}`,
                    transform: 'rotate(14deg)',
                    pointerEvents: 'none',
                    ...uc.decor.pos,
                  }}
                />
              )}
              {uc.decor.type === 'square' && (
                <div
                  style={{
                    position: 'absolute',
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: uc.decor.color,
                    transform: 'rotate(12deg)',
                    pointerEvents: 'none',
                    ...uc.decor.pos,
                  }}
                />
              )}

              {/* Mini element */}
              {uc.mini && (
                <div
                  style={{
                    position: 'absolute',
                    width: uc.mini.w,
                    height: uc.mini.h,
                    borderRadius: '8px',
                    background: '#fff',
                    boxShadow: '0 8px 16px rgba(26,26,26,0.18)',
                    pointerEvents: 'none',
                    ...uc.mini.pos,
                  }}
                />
              )}

              {/* Title */}
              <div style={{ position: 'absolute', bottom: '20px', left: '22px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: '23px',
                    color: uc.textColor,
                    lineHeight: 1,
                  }}
                >
                  {uc.titleEn}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-korean)',
                    fontSize: '14px',
                    color: uc.textColor === '#fff' ? 'rgba(255,255,255,0.85)' : 'rgba(26,26,26,0.75)',
                    marginTop: '2px',
                  }}
                >
                  {uc.titleKo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`.uc-tile:hover { transform: translateY(-8px); }`}</style>
    </section>
  )
}
