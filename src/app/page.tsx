import Text from "components/atoms/Text/index.tsx";
import Header from "components/molecules/Header/index.tsx";
import ReactCalendar from "../components/molecules/Calendar";

export default function Home() {
  return (
    <>
      <Header />
      <ReactCalendar />
      <Text>메인페이지입니다.</Text>
    </>
  );
}
