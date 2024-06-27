"use client";

import { useSearchParams } from "next/navigation";
import Header from "components/molecules/Header/index.tsx";
import Diary from "components/organisms/Diary/index.tsx";

const WritingPage = () => {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  return (
    <>
      <Header />
      <h1>{date} 일기</h1>
      <Diary />
    </>
  );
};

export default WritingPage;
