interface PageProps {
  params: {
    page: string;
  };
}

// 비동기 컴포넌트로 변경
export default async function Page({ params }: PageProps) {
  const { page } = await params;

  return (
    <div>
      <h1>{page} 페이지</h1>
      <p>여기는 병렬 라우팅된 {page}의 콘텐츠입니다.</p>
    </div>
  );
}
