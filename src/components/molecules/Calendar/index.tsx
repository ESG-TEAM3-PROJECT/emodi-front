"use client";

import { SetStateAction, useEffect, useState } from "react";
import Calendar from "react-calendar";
import './styles.css';

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
      <Calendar locale="ko" onChange={onChange} value={value} tileContent={({ activeStartDate, date, view }) => view === 'month' && date.getDay() === 0 ? <p>Its Sunday!</p> : null} />
    </div>
  );
}
