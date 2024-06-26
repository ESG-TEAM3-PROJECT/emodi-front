"use client";

import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./styles.css";
import styled from "styled-components";

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

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ReactCalendar() {
  const [value, setValue] = useState<Value>(new Date());

  function onChange(nextValue: SetStateAction<Value>) {
    setValue(nextValue);
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
