"use client";

import axios from "axios";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import Icon from "components/atoms/Icon/index.tsx";
import { diaryIdState, selectedDateState } from "utils/state.ts";
import "./styles.css";

const PROFILE_IMAGE_PATH = "/image/user_profile.svg";

const ProfileImgDiv = styled.div`
  background-color: #d9d9d9;
  height: 86px;
  width: 86px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
const CalContainerDiv = styled.div`
  position: absolute;
`;

interface Diary {
  date: string;
  mood: string;
}

export default function ReactCalendar() {
  // 선택한 날짜 전역 상태 관리
  const setSelectedDate = useSetRecoilState(selectedDateState);
  // 다이어리 아이디 전역 상태 관리
  const diaryId = useRecoilValue(diaryIdState);

  // 현재 날짜
  const curDate = new Date();
  // 클릭한 날짜 (초기값으로 현재 날짜를 넣음)
  const [value, setValue] = useState(curDate);
  // 작성된 일기 날짜와 기분을 저장하는 상태
  const [diaries, setDiaries] = useState<Diary[]>([]);

  // 날짜 눌렀을 때 발생하는 이벤트
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = async (nextValue: any) => {
    setValue(nextValue);
    const diaryDate = moment(nextValue).format("YYYY-MM-DD");
    setSelectedDate(diaryDate);
    window.location.href = `/write`;
  };

  //
  useEffect(() => {
    const fetchDiaryDates = async () => {
      try {
        const response = await axios.get(`/api/diaries/${diaryId}`);
        const diaryData = response.data;
        const newDiaries = [
          {
            date: moment(diaryData.dairyDto.date).format("YYYY-MM-DD"),
            mood: diaryData.sentimentDto.mood,
          },
        ];
        setDiaries(newDiaries);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDiaryDates();
  }, []);

  const getMoodIcon = (date: Date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    const diary = diaries.find((d) => d.date === formattedDate);
    if (diary) {
      switch (diary.mood) {
        case "positive":
          return "positive";
        case "neutral":
          return "neutral";
        case "negative":
          return "negative";
        default:
          return null;
      }
    }
  };

  return (
    <CalContainerDiv>
      <ProfileImgDiv>
        <Image src={PROFILE_IMAGE_PATH} alt="profile" width={70} height={70} />
      </ProfileImgDiv>
      <div style={{ marginTop: "65px" }}>
        <Calendar
          locale="ko"
          onChange={onChange}
          value={value}
          minDetail="year"
          next2Label={null}
          prev2Label={null}
          tileContent={({ date, view }) =>
            view === "month" && getMoodIcon(date) ? (
              <div className="react-calendar__tile__emoji--btn">
                <Icon iconName={getMoodIcon(date)} width={50} />
              </div>
            ) : (
              <div className="react-calendar__tile__emoji--btn"></div>
            )
          }
        />
      </div>
    </CalContainerDiv>
  );
}
