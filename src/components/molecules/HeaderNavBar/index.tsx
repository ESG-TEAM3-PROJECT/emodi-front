import Image from "next/image";


export default function HeaderNavBar() {
  return(
  <div id="header">
    <Image src="/image/logo.svg" width={70} height={30} alt="logo" />
    <Image src="/image/hamburger_btn.svg" width={30} height={19} alt="hamburger_btn" />
  </div>);
}