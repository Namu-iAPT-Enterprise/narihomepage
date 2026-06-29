'use client'

import { useState } from 'react'
import CharactersVideo from './CharactersVideo'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '120px 40px 0',
        textAlign: 'center',
        background: '#FFFDF0',
        overflow: 'hidden',
      }}
    >
      {/* Floating confetti shapes */}
      <div
        className="gsap-confetti"
        suppressHydrationWarning
        style={{
          position: 'absolute',
          left: '8%',
          top: '18%',
          width: '46px',
          height: '46px',
          borderRadius: '12px',
          background: '#785DFF',
          transform: 'rotate(-14deg)',
          animation: 'floatSoft 6s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        className="gsap-confetti"
        suppressHydrationWarning
        style={{
          position: 'absolute',
          right: '10%',
          top: '14%',
          width: 0,
          height: 0,
          borderLeft: '26px solid transparent',
          borderRight: '26px solid transparent',
          borderBottom: '46px solid #00EFAB',
          transform: 'rotate(16deg)',
          animation: 'floatSoft 7s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        className="gsap-confetti"
        suppressHydrationWarning
        style={{
          position: 'absolute',
          left: '14%',
          bottom: '28%',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#FF9AEA',
          animation: 'floatSoft 6.5s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        className="gsap-confetti"
        suppressHydrationWarning
        style={{
          position: 'absolute',
          right: '13%',
          bottom: '30%',
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          background: '#FFDB00',
          animation: 'floatSoft 5.5s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        className="gsap-confetti"
        suppressHydrationWarning
        style={{
          position: 'absolute',
          right: '22%',
          top: '40%',
          width: '30px',
          height: '30px',
          borderRadius: '8px',
          background: '#FE6900',
          transform: 'rotate(20deg)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: '#785DFF',
            marginBottom: '22px',
          }}
        >
          ✦&nbsp;&nbsp;LET&apos;S TALK&nbsp;&nbsp;✦
        </div>

        <h2
          className="gsap-contact-heading"
          suppressHydrationWarning
          style={{
            margin: 0,
            fontFamily: 'var(--font-korean)',
            fontWeight: 700,
            fontSize: 'clamp(34px,5.2vw,80px)',
            lineHeight: 1.12,
            letterSpacing: '-0.03em',
          }}
        >
          우리,{' '}
          <span
            style={{
              background: '#AF98FF',
              borderRadius: '0.14em',
              padding: '0.02em 0.14em',
              WebkitBoxDecorationBreak: 'clone',
              boxDecorationBreak: 'clone',
            }}
          >
            함께
          </span>{' '}
          만들어볼까요?
        </h2>

        <p
          style={{
            maxWidth: '560px',
            margin: '24px auto 0',
            fontSize: '17px',
            lineHeight: 1.7,
            color: 'rgba(26,26,26,0.6)',
          }}
        >
          브랜드에 어울리는 캐릭터를 찾고 있다면, 가벼운 대화부터 시작해요.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '14px',
            justifyContent: 'center',
            marginTop: '34px',
            flexWrap: 'wrap',
          }}
        >
          {!submitted ? (
            <>
              <button
                onClick={() => setSubmitted(true)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#FFFDF0',
                  background: '#1A1A1A',
                  border: 'none',
                  padding: '16px 34px',
                  borderRadius: '100px',
                  cursor: 'pointer',
                  transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
              >
                스튜디오 문의하기
              </button>
              <a
                href="#system"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1A1A1A',
                  background: '#fff',
                  border: '1px solid rgba(26,26,26,0.14)',
                  padding: '16px 34px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                }}
              >
                서비스 보기 &rarr;
              </a>
            </>
          ) : (
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(120,93,255,0.3)',
                borderRadius: '100px',
                padding: '16px 32px',
                fontFamily: 'var(--font-korean)',
                fontSize: '16px',
                color: '#1A1A1A',
                boxShadow: '0 14px 30px rgba(26,26,26,0.08)',
              }}
            >
              감사합니다! 소식이 준비되면 가장 먼저 알려드릴게요 ✦
            </div>
          )}
        </div>
      </div>

      {/* Characters floating */}
      <div
        style={{
          marginTop: '44px',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2,
          animation: 'floatY 6s ease-in-out infinite',
        }}
      >
        <CharactersVideo width={360} />
      </div>
    </section>
  )
}
