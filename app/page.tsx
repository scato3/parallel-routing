"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <h2>ㅎㅇ</h2>
      <button
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        나야
      </button>
    </>
  );
}
