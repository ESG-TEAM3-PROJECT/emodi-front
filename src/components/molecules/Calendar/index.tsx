"use client";

import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./styles.css";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { selectedDateState } from "utils/state.ts";

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

export default function ReactCalendar() {
  const curDate = new Date(); // 현재 날짜
  const [value, setValue] = useState(curDate); // 클릭한 날짜 (초기값으로 현재 날짜를 넣음)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const activeDate = moment(value).format("YYYY-MM-DD"); // 클릭한 날짜 (년-월-일)
  const setSelectedDate = useSetRecoilState(selectedDateState);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onChange(nextValue: any) {
    setValue(nextValue);
    const diaryDate = moment(nextValue).format("YYYY-MM-DD");
    setSelectedDate(diaryDate);
    window.location.href = `/write`;
  }

  useEffect(() => {
    console.log(value);
  }, [value]);

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
          tileContent={({ view }) =>
            view === "month" ? (
              <div className="react-calendar__tile__emoji--btn">
                <div>&#x1F601;</div>
              </div>
            ) : null
          }
        />
      </div>
    </CalContainerDiv>
  );
}
