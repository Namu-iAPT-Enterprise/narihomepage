import CharactersVideo from './CharactersVideo'

const features = [
  {
    id: 'system',
    bg: '#785DFF',
    shadowColor: 'rgba(120,93,255,0.24)',
    decor: { circle: '#00EFAB', triangle: '#FFDB00' },
    reversed: false,
    iconBg: '#785DFF',
    titleKo: '일관된 캐릭터 시스템',
    titleEn: 'A coherent character system',
    desc: '표정·포즈·비율·컬러까지 하나의 규칙으로. 어디에 쓰여도 같은 얼굴로 인사하는 캐릭터를 설계합니다.',
    char: 'beret',
  },
  {
    id: 'merch',
    bg: '#00EFAB',
    shadowColor: 'rgba(0,239,171,0.22)',
    decor: { circle: '#785DFF', square: '#FF9AEA' },
    reversed: true,
    iconBg: '#00EFAB',
    titleKo: '실물로 사랑받는 굿즈',
    titleEn: 'Merch people keep',
    desc: '스티커·키링·문구류까지. 캐릭터가 화면을 넘어 손에 쥐어지는 순간을 함께 설계하고 제작합니다.',
    char: 'glasses',
  },
  {
    id: 'identity',
    bg: '#FF9AEA',
    shadowColor: 'rgba(255,154,234,0.26)',
    decor: { circle: '#FFDB00', triangle: '#00B4FB' },
    reversed: false,
    iconBg: '#FF9AEA',
    titleKo: '살아있는 브랜드 아이덴티티',
    titleEn: 'A living brand identity',
    desc: '로고·컬러·타입·톤까지 캐릭터를 중심으로. 브랜드의 성격이 흔들리지 않도록 통합 시스템을 구축합니다.',
    char: 'beret',
  },
  {
    id: 'ip',
    bg: '#FE6900',
    shadowColor: 'rgba(254,105,0,0.24)',
    decor: { circle: '#785DFF', square: '#00EFAB' },
    reversed: true,
    iconBg: '#FE6900',
    titleKo: '확장 가능한 캐릭터 IP',
    titleEn: 'A scalable character IP',
    desc: '하나의 캐릭터에서 시작해 세계관, 콜라보, 애니메이션까지. 오래 사랑받을 IP로 키워갑니다.',
    char: 'glasses',
  },
]

export default function ServicesSection() {
  return (
    <section id="system" style={{ padding: '30px 40px 70px', background: '#fff' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 64px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.3em',
              color: '#785DFF',
              marginBottom: '16px',
            }}
          >
            — 우리가 하는 일
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
            몰랑은 흩어진 캐릭터 작업을
            <br />
            하나의 시스템으로 연결합니다.
          </h2>
        </div>

        {/* Feature rows */}
        {features.map((f, idx) => (
          <div
            key={f.id}
            className={`gsap-feature-row${f.reversed ? ' gsap-feature-row--reversed' : ''}`}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '56px',
              alignItems: 'center',
              marginBottom: idx < features.length - 1 ? '80px' : 0,
            }}
          >
            {/* Image panel */}
            <div
              className="gsap-feature-panel"
              style={{
                order: f.reversed ? 2 : 1,
                aspectRatio: '5/4',
                borderRadius: '28px',
                background: f.bg,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: `0 30px 60px ${f.shadowColor}`,
              }}
            >
              {/* Decor circle */}
              <div
                style={{
                  position: 'absolute',
                  ...(f.reversed
                    ? { right: '-30px', top: '-30px' }
                    : { left: '-30px', bottom: '-30px' }),
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: f.decor.circle,
                  opacity: 0.82,
                  pointerEvents: 'none',
                }}
              />
              {/* Decor shape */}
              {f.decor.triangle && (
                <div
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '18px',
                    width: 0,
                    height: 0,
                    borderLeft: '26px solid transparent',
                    borderRight: '26px solid transparent',
                    borderBottom: `46px solid ${f.decor.triangle}`,
                    transform: 'rotate(16deg)',
                    pointerEvents: 'none',
                  }}
                />
              )}
              {f.decor.square && (
                <div
                  style={{
                    position: 'absolute',
                    ...(f.reversed ? { left: '20px', bottom: '20px' } : { left: '20px', top: '20px' }),
                    width: '46px',
                    height: '46px',
                    background: f.decor.square,
                    borderRadius: '10px',
                    transform: 'rotate(-12deg)',
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Mini mock card */}
              <div
                style={{
                  position: 'absolute',
                  left: '7%',
                  top: '9%',
                  right: '7%',
                  background: '#fff',
                  borderRadius: '14px',
                  boxShadow: '0 18px 36px rgba(26,26,26,0.18)',
                  padding: '14px',
                }}
              >
                <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF9AEA' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFDB00' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00EFAB' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px' }}>
                  {['#F1EEFF', '#E1FBF1', '#FFE9FA', '#FFF4CC', '#E1FBF1', '#FFE9FA', '#FFF4CC', '#F1EEFF'].map(
                    (bg, i) => (
                      <div
                        key={i}
                        style={{ aspectRatio: '1', borderRadius: '9px', background: bg }}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Character */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-3%',
                  ...(f.reversed ? { left: '-7%' } : { right: '-6%' }),
                  width: '50%',
                  filter: 'drop-shadow(0 16px 24px rgba(26,26,26,0.25))',
                  animation: f.char === 'beret' ? 'floatY 7s ease-in-out infinite' : 'floatYb 7s ease-in-out infinite',
                }}
              >
                <CharactersVideo width="100%" />
              </div>
            </div>

            {/* Text */}
            <div className="gsap-feature-text" style={{ order: f.reversed ? 1 : 2 }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: f.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '22px',
                }}
              >
                <div
                  style={{
                    width: '22px',
                    height: '20px',
                    background: '#fff',
                    borderRadius: '50% 50% 47% 47%',
                  }}
                />
              </div>
              <h3
                style={{
                  margin: '0 0 6px',
                  fontFamily: 'var(--font-korean)',
                  fontWeight: 700,
                  fontSize: '26px',
                  letterSpacing: '-0.01em',
                }}
              >
                {f.titleKo}
              </h3>
              <p
                style={{
                  margin: '0 0 14px',
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '21px',
                  color: 'rgba(26,26,26,0.5)',
                }}
              >
                {f.titleEn}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: '15.5px',
                  lineHeight: 1.8,
                  color: 'rgba(26,26,26,0.66)',
                  maxWidth: '420px',
                }}
              >
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
