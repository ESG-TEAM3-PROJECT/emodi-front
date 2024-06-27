"use client"
import Link from "next/link";
import H3 from "components/atoms/H3";
import Header from "components/molecules/Header/index.tsx";
import LinkDiv from "components/molecules/LinkDiv";

export default function Home() {
  return (
    <>
      <Header />
      <H3>메인페이지입니다</H3>
      <Link href="/calendar">
        <LinkDiv>캘린더 바로가기</LinkDiv>
      </Link>
      <Link href="/login">
        <LinkDiv>로그인 바로가기</LinkDiv>
      </Link>
    </>
  );
}
