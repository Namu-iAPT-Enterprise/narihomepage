interface Props {
  size?: number
}

export default function CharacterGlasses({ size = 140 }: Props) {
  const scale = size / 140
  return (
    <div style={{ width: size, height: Math.round(185 * scale), position: 'relative', flexShrink: 0 }}>
      <style>{`
        @keyframes blinkBlue {
          0%,88%,100% { transform: scaleY(1); }
          94% { transform: scaleY(0.05); }
        }
        .ch-eye-b { animation: blinkBlue 5s ease-in-out infinite; transform-origin: 50% 50%; }
        .ch-eye-b2 { animation-delay: 0.12s; }
      `}</style>

      <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', width: 140, height: 185, position: 'relative' }}>

        {/* Hat — outside clipped body so it shows above the ellipse */}
        <div style={{
          position: 'absolute', top: 0, left: '10%', width: '80%', height: 42,
          background: '#a8dff3',
          border: '3px solid #000',
          borderRadius: '50% 50% 0 0',
          zIndex: 2,
        }} />

        {/* Character body — clipped to soft ellipse */}
        <div style={{
          position: 'absolute', top: 15, left: 0,
          width: 140, height: 170,
          background: 'radial-gradient(circle at 50% 70px, white 40%, rgba(255,192,203,0.3) 100%)',
          border: '3px solid #000',
          clipPath: 'ellipse(48% 60% at 50% 60%)',
          zIndex: 1,
        }}>
          {/* Blush — slightly lower for blue character */}
          <div style={{ position: 'absolute', top: 70, left: 25, width: 15, height: 15, background: '#ffc0cb', borderRadius: '50%', filter: 'blur(2px)', opacity: 0.7 }} />
          <div style={{ position: 'absolute', top: 70, right: 25, width: 15, height: 15, background: '#ffc0cb', borderRadius: '50%', filter: 'blur(2px)', opacity: 0.7 }} />

          {/* Glasses */}
          <div style={{ position: 'absolute', top: 50, left: 15, width: 110, height: 45, display: 'flex', gap: '10px' }}>
            {/* Left lens */}
            <div style={{ position: 'relative', width: 45, height: 45, border: '3px solid #000', borderRadius: '50%', background: 'rgba(255,255,255,0.4)', mixBlendMode: 'soft-light', overflow: 'hidden', flexShrink: 0 }}>
              <div style={{ position: 'absolute', top: 5, left: 5, width: 20, height: 20, background: 'white', borderRadius: '50%', opacity: 0.5, filter: 'blur(2px)' }} />
            </div>
            {/* Right lens */}
            <div style={{ position: 'relative', width: 45, height: 45, border: '3px solid #000', borderRadius: '50%', background: 'rgba(255,255,255,0.4)', mixBlendMode: 'soft-light', overflow: 'hidden', flexShrink: 0 }}>
              <div style={{ position: 'absolute', top: 5, left: 5, width: 20, height: 20, background: 'white', borderRadius: '50%', opacity: 0.5, filter: 'blur(2px)' }} />
            </div>
          </div>

          {/* Eyes — at top:75 inside glasses lenses */}
          <div className="ch-eye-b" style={{ position: 'absolute', top: 75, left: 40, width: 10, height: 10, background: '#000', borderRadius: '50%' }} />
          <div className="ch-eye-b ch-eye-b2" style={{ position: 'absolute', top: 75, right: 40, width: 10, height: 10, background: '#000', borderRadius: '50%' }} />

          {/* Open "ahh" mouth */}
          <div style={{
            position: 'absolute', top: 90, left: '50%',
            transform: 'translateX(-50%)',
            width: 15, height: 18,
            background: '#000',
            borderRadius: '50%',
          }} />
        </div>
      </div>
    </div>
  )
}
