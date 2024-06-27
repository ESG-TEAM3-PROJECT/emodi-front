import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const selectedDateState = atom({
  key: "selectedDateState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const diaryIdState = atom({
  key: "diaryIdState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
