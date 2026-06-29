interface Props {
  size?: number
}

export default function CharacterBeret({ size = 140 }: Props) {
  const scale = size / 140
  return (
    <div style={{ width: size, height: Math.round(185 * scale), position: 'relative', flexShrink: 0 }}>
      <style>{`
        @keyframes blinkPink {
          0%,88%,100% { transform: scaleY(1); }
          92% { transform: scaleY(0.05); }
        }
        .ch-eye-p { animation: blinkPink 4.2s ease-in-out infinite; transform-origin: 50% 50%; }
        .ch-eye-p2 { animation-delay: 0.08s; }
      `}</style>

      <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', width: 140, height: 185, position: 'relative' }}>

        {/* Hat — outside clipped body so it shows above the ellipse */}
        <div style={{
          position: 'absolute', top: 0, left: '10%', width: '80%', height: 42,
          background: '#ffb6c1',
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
          {/* Blush */}
          <div style={{ position: 'absolute', top: 60, left: 25, width: 15, height: 15, background: '#ffc0cb', borderRadius: '50%', filter: 'blur(2px)', opacity: 0.7 }} />
          <div style={{ position: 'absolute', top: 60, right: 25, width: 15, height: 15, background: '#ffc0cb', borderRadius: '50%', filter: 'blur(2px)', opacity: 0.7 }} />

          {/* Eyes */}
          <div className="ch-eye-p" style={{ position: 'absolute', top: 60, left: 40, width: 10, height: 10, background: '#000', borderRadius: '50%' }} />
          <div className="ch-eye-p ch-eye-p2" style={{ position: 'absolute', top: 60, right: 40, width: 10, height: 10, background: '#000', borderRadius: '50%' }} />

          {/* Smile mouth */}
          <div style={{
            position: 'absolute', top: 80, left: '50%',
            transform: 'translateX(-50%)',
            width: 22, height: 10,
            borderBottom: '3px solid #000',
            borderRadius: '50%',
          }} />
        </div>
      </div>
    </div>
  )
}
