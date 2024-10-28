export default function DefaultVideo() {
  return (
    <video
      width="100%"
      height="100%"
      controls
      autoPlay
      loop
      muted
      src="/PANDA.mp4"
      style={{ objectFit: "cover" }}
    />
  );
}
