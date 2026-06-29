'use client'

import { useState } from 'react'

interface VideoBackgroundProps {
  src: string
}

export default function VideoBackground({ src }: VideoBackgroundProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className="hero-gradient-fallback"
        style={{ position: 'absolute', inset: 0 }}
      />
    )
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onError={() => setFailed(true)}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',       
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
