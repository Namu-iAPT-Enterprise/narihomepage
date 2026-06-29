import CharactersVideo from './CharactersVideo'

export default function HeroSection() {
  return (
    <section id="hero" style={{ padding: '160px 40px 0', textAlign: 'center', background: '#FFFDF0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Eyebrow */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: '#785DFF',
            fontWeight: 500,
            marginBottom: '26px',
            animation: 'riseUp 0.8s cubic-bezier(0.16,1,0.3,1) both',
          }}
        >
          ✦&nbsp;&nbsp;BRAND CHARACTER DESIGN STUDIO&nbsp;&nbsp;✦
        </div>

        {/* H1 */}
        <h1
          style={{
            margin: 0,
            fontFamily: 'var(--font-korean)',
            fontWeight: 700,
            fontSize: 'clamp(40px,6.4vw,96px)',
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
            animation: 'riseUp 0.9s cubic-bezier(0.16,1,0.3,1) both',
            animationDelay: '0.08s',
          }}
        >
          브랜드를 위한
          <br />
          <br />
          <span
            style={{
              background: '#AF98FF',
              borderRadius: '0.16em',
              padding: '0.02em 0.16em',
              WebkitBoxDecorationBreak: 'clone',
              boxDecorationBreak: 'clone',
            }}
          >
            캐릭터
          </span>{' '}
          운영{' '}
          <span
            style={{
              background: '#00EFAB',
              borderRadius: '0.16em',
              padding: '0.02em 0.16em',
              WebkitBoxDecorationBreak: 'clone',
              boxDecorationBreak: 'clone',
            }}
          >
            시스템
          </span>
        </h1>

        {/* Subhead */}
        <p
          style={{
            maxWidth: '640px',
            margin: '28px auto 0',
            fontSize: 'clamp(16px,1.5vw,19px)',
            lineHeight: 1.7,
            color: 'rgba(26,26,26,0.6)',
            animation: 'riseUp 0.9s cubic-bezier(0.16,1,0.3,1) both',
            animationDelay: '0.18s',
          }}
        >
          몰랑 스튜디오는 마스코트 디자인부터 굿즈, 브랜드 아이덴티티까지 — 흩어진 캐릭터 작업을 하나의 세계관으로 연결합니다.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
            marginTop: '34px',
            flexWrap: 'wrap',
            animation: 'riseUp 0.9s cubic-bezier(0.16,1,0.3,1) both',
            animationDelay: '0.28s',
          }}
        >
          <a
            href="#uses"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 600,
              color: '#FFFDF0',
              background: '#1A1A1A',
              padding: '15px 30px',
              borderRadius: '100px',
              textDecoration: 'none',
            }}
          >
            작업물 보기
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 600,
              color: '#1A1A1A',
              background: '#fff',
              border: '1px solid rgba(26,26,26,0.14)',
              padding: '15px 30px',
              borderRadius: '100px',
              textDecoration: 'none',
            }}
          >
            스튜디오 문의 &rarr;
          </a>
        </div>
      </div>

      {/* ── Purple hero band ── */}
      <div
        className="hero-band"
        style={{
          maxWidth: '1320px',
          margin: '62px auto 0',
          position: 'relative',
          borderRadius: '30px',
          overflow: 'hidden',
          background: '#785DFF',
          boxShadow: '0 50px 100px rgba(120,93,255,0.28)',
        }}
      >
        {/* Decor shapes */}
        <div
          style={{
            position: 'absolute',
            left: '-40px',
            top: '-30px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: '#AF98FF',
            opacity: 0.7,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '8%',
            top: '14%',
            width: 0,
            height: 0,
            borderLeft: '42px solid transparent',
            borderRight: '42px solid transparent',
            borderBottom: '74px solid #00EFAB',
            transform: 'rotate(18deg)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '3%',
            bottom: '8%',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: '#FF9AEA',
            opacity: 0.85,
            pointerEvents: 'none',
          }}
        />

        {/* Content grid */}
        <div
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr',
            gap: '30px',
            alignItems: 'center',
            padding: '46px 50px 0',
            minHeight: '360px',
          }}
        >
          {/* Left: mock dashboard card */}
          <div
            style={{
              background: '#fff',
              borderRadius: '18px',
              boxShadow: '0 30px 60px rgba(26,26,26,0.22)',
              overflow: 'hidden',
              textAlign: 'left',
            }}
          >
            {/* Title bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 18px',
                borderBottom: '1px solid #F0EFEC',
              }}
            >
              <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#FF9AEA' }} />
              <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#FFDB00' }} />
              <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#00EFAB' }} />
              <span
                style={{
                  marginLeft: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: '#9a9a98',
                }}
              >
                몰랑 · 캐릭터 시트.fig
              </span>
            </div>
            {/* Grid of character tiles */}
            <div
              style={{
                padding: '20px 20px 24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(4,1fr)',
                gap: '12px',
              }}
            >
              {[
                { bg: '#F1EEFF' },
                { bg: '#E1FBF1' },
                { bg: '#FFE9FA' },
                { bg: '#FFF4CC' },
              ].map((tile, i) => (
                <div
                  key={i}
                  style={{
                    aspectRatio: '1',
                    borderRadius: '12px',
                    background: tile.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '54%',
                      height: '50%',
                      background: '#fff',
                      borderRadius: '50% 50% 47% 47%',
                      boxShadow: 'inset -3px -4px 6px rgba(26,26,26,0.07), 0 2px 6px rgba(26,26,26,0.06)',
                    }}
                  />
                </div>
              ))}
              <div
                style={{
                  gridColumn: 'span 3',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '9px',
                  justifyContent: 'center',
                }}
              >
                {['90%', '70%', '80%'].map((w, i) => (
                  <div
                    key={i}
                    style={{ height: '11px', width: w, borderRadius: '6px', background: '#EDEDEA' }}
                  />
                ))}
              </div>
              <div
                style={{
                  borderRadius: '12px',
                  background: '#785DFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '12px',
                  fontWeight: 600,
                }}
              >
                승인
              </div>
            </div>
          </div>

          {/* Right: characters video */}
          <div
            style={{
              alignSelf: 'end',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              animation: 'floatY 6s ease-in-out infinite',
            }}
          >
            <CharactersVideo width={320} />
          </div>
        </div>
      </div>
    </section>
  )
}
