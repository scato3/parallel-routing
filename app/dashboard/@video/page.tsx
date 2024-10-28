export default function VideoLayout() {
  return (
    <div style={{ height: "100%" }}>
      <video
        width="100%"
        height="100%"
        controls
        autoPlay
        loop
        muted
        src="/PANDA.mp4" // 비디오 파일 경로 확인
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
