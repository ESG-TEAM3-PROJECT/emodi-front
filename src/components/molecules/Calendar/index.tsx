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
    <div>
      <Calendar locale="ko" onChange={onChange} value={value} />
    </div>
  );
}
