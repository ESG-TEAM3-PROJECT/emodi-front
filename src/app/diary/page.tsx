"use client";

import { useSearchParams } from "next/navigation";
import Header from "components/molecules/Header/index.tsx";

const DiaryPage = () => {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  return (
    <>
      <Header />
      <h1>{date} 일기 조회</h1>
    </>
  );
};

export default DiaryPage;
