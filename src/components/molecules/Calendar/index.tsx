"use client";

import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
// eslint-disable-next-line import/no-named-as-default
import Calendar from "react-calendar";
import './styles.css';
import styled from "styled-components";

const PROFILE_IMAGE_PATH = "/image/temp_user_profile.svg"


const ImgUp = styled.img`
    position: absolute;
    left: 100%;
    transform: translateX(-50%);
    `
const ImgDown = styled.img`
    position: absolute;
    top: 100%;
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
const CalContainerDiv = styled.div`
    position: absolute`

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
    <CalContainerDiv>
      <ImgUp src="/assets/image/main_up_deco.svg"/>
      <ImgDown src="/assets/image/main_bottom_deco.svg"/>
      <ProfileImgDiv>
        <Image src={PROFILE_IMAGE_PATH} alt="profile" width={86} height={86}/>
      </ProfileImgDiv>
      <div style={{marginTop: "65px"}}>
      <Calendar locale="en" onChange={onChange} value={value} minDetail="year" next2Label={null} prev2Label={null} tileContent={({  view }) => view === 'month'  ? <button className="react-calendar__tile__emoji--btn"><div>&#x1F601;</div></button> : null} />
      </div>
    </CalContainerDiv>
  );
}
