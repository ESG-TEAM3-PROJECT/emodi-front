"use client";

import { SetStateAction, useEffect, useState } from "react";
import Calendar from "react-calendar";
import './styles.css';
import styled from "styled-components";

const ImgUp = styled.img`
    position: absolute;
    left: 100%;
    transform: translateX(-50%);
    `
const ImgDown = styled.img`
    position: absolute;
    top: 70%;
    transform: translateX(-50%);
    `
const ProfileImgDiv = styled.div`
    background-color: #D9D9D9;
    height: 86px;
    width: 86px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);`

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ReactCalendar() {
  const [value, setValue] = useState<Value>(new Date());

  function onChange(nextValue: SetStateAction<Value>) {
    setValue(nextValue);
  }

  useEffect(() => {
    console.log(value);
  },[value])

  return (
    <div>
      <ImgUp src="/image/main_up_deco.svg"/>
      <ImgDown src="/image/main_bottom_deco.svg"/>
      <ProfileImgDiv>
        <img src="/image/temp_user_profile.svg"/>
      </ProfileImgDiv>
      <Calendar locale="ko" onChange={onChange} value={value} tileContent={({ activeStartDate, date, view }) => view === 'month' && date.getDay() === 0 ? <p>Its Sunday!</p> : null} />
    </div>
  );
}
