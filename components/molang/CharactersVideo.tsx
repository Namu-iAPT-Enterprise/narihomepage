interface Props {
  width?: number | string
  style?: React.CSSProperties
}

export default function CharactersVideo({ width = 320, style }: Props) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{ width, display: 'block', ...(style as object) }}
    >
      <source src="/videos/cuteguys.webm" type="video/webm" />
      <source src="/videos/cuteguys.mp4" type="video/mp4" />
    </video>
  )
}
