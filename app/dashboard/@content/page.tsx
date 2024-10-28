"use client";

import { useRouter } from "next/navigation";

export default function DashBoard() {
  const router = useRouter();
  return (
    <>
      <h2>ㅎㅇ</h2>
      <button
        onClick={() => {
          router.push("/dashboard/1");
        }}
      >
        나야
      </button>
    </>
  );
}
