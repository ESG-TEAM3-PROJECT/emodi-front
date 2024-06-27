import Link from "next/link";
import { useState } from "react";
import H3 from "components/atoms/H3"; 
import Button from "components/molecules/Button/index.tsx";
import FormDiv from "components/molecules/FormDiv";
import Input from "components/molecules/Input/index.tsx";
import LinkDiv from "components/molecules/LinkDiv";
import { successAlert, warningAlert } from "lib/sweetAlert.tsx";

const Signup = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");

  // 아이디 입력 이벤트
  const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  // 비밀번호 입력 이벤트
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // 비밀번호 재확인 입력 이벤트
  const handleCheckPasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(e.target.value);
  };

  // 회원가입 버튼 이벤트
  const handleSignup = async () => {
    try {
      // 아이디 유효성 검사
      if (!/^[a-zA-Z0-9-_]+$/.test(username)) {
        warningAlert(
          "회원가입 실패",
          "올바른 아이디 형식으로 입력하세요.",
          "확인"
        );
        return;
      }

      // 비밀번호 유효성 검사
      if (!/^[a-zA-Z0-9-_]+$/.test(password)) {
        warningAlert(
          "회원가입 실패",
          "비밀번호는 영문자, 숫자, 대시, 언더스코어만 허용됩니다.",
          "확인"
        );
        return;
      }

      // 아이디를 입력하지 않은 경우
      if (!username) {
        warningAlert("회원가입 실패", "아이디를 입력해주세요.", "확인");
      }

      // 비밀번호와 비밀번호를 재확인했을 때, 일치하지 않은 경우
      if (password !== checkPassword) {
        warningAlert("회원가입 실패", "비밀번호가 일치하지 않습니다.", "확인");
        return;
      }

      setErrorMessage("");

      // 회원가입 정보
      const data = {
        username,
        password,
      };

      console.log(data);

      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        // credentials: "include", // 클라이언트와 서버가 통신할 때 쿠키와 같은 인증 정보 값을 공유하겠다는 설정
      });

      if (response.ok) {
        successAlert(
          "회원가입 성공",
          "회원가입이 완료되었습니다!",
          "확인"
        ).then(() => {
          window.location.href = "/login";
        });
        setUsername("");
        setPassword("");
        setCheckPassword("");
      } else {
        setErrorMessage(`회원가입 실패: ${await response.json()}`);
      }
    } catch (error) {
      setErrorMessage(`회원가입 중 오류 발생: ${error}`);
    }
  };

  return (
    <FormDiv>
      <H3>회원가입</H3>
      <Input
        name="username"
        type="text"
        placeholder="아이디"
        onChange={handleUsernameInput}
      />

      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        onChange={handlePasswordInput}
      />

      <Input
        name="checkPassword"
        type="password"
        placeholder="비밀번호 재확인"
        onChange={handleCheckPasswordInput}
      />
      <Button onClick={handleSignup}>회원가입</Button>
      <Link href="/login">
        <LinkDiv>로그인하러 가기</LinkDiv>
      </Link>
    </FormDiv>
  );
};

export default Signup;
