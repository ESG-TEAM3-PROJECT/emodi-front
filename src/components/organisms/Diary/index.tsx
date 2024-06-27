"use client";

import { useState } from "react";
import { useRecoilValue } from "recoil";
import Button from "components/molecules/Button/index.tsx";
import Input from "components/molecules/Input/index.tsx";
import { successAlert } from "lib/sweetAlert.tsx";
import { selectedDateState } from "utils/state.ts";

const Diary = () => {
  const selectedDate = useRecoilValue(selectedDateState);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  // const [errorMessage, setErrorMessage] = useState<string>("");

  // 제목 입력 이벤트
  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const submitDiary = async () => {
    try {
      const data = {
        date: selectedDate,
        title,
        content,
      };

      console.log(data);
      const response = await fetch("/api/diaries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        successAlert(
          "일기 작성 성공",
          "작성한 일기가 저장되었습니다.",
          "확인"
        ).then(() => {
          window.location.href = "/diary";
        });
        setTitle("");
        setContent("");
      } else {
        console.log("err", response.json());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Input
        name="title"
        type="text"
        placeholder="제목"
        onChange={handleTitleInput}
      />
      <Input
        name="content"
        type="text"
        placeholder="일기"
        onChange={handleContentInput}
      />
      <Button onClick={submitDiary}>저장</Button>
      <Button>수정</Button>
      <Button>삭제</Button>
    </>
  );
};

export default Diary;
