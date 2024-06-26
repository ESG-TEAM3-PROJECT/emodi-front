"use client";

import { SetStateAction, useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ReactCalendar() {
  const [value, setValue] = useState<Value>(new Date());

  function onChange(nextValue: SetStateAction<Value>) {
    setValue(nextValue);
  }

  return (
    <CalContainerDiv>
      <ImgUp src="/assets/image/main_up_deco.svg"/>
      <ImgDown src="/assets/image/main_bottom_deco.svg"/>
      <ProfileImgDiv>
        <img src="/assets/image/temp_user_profile.svg"/>
      </ProfileImgDiv>
      <div style={{marginTop: "65px"}}>
      <Calendar locale="en" onChange={onChange} value={value} minDetail="year" next2Label={null} prev2Label={null} tileContent={({ activeStartDate, date, view }) => view === 'month'  ? <button className="react-calendar__tile__emoji--btn"><div>&#x1F601;</div></button> : null} />
      </div>
    </CalContainerDiv>
  );
}
