import axios from "axios";
import { useState } from "react";
import Text from "components/atoms/Text/index.tsx";

import Button from "components/molecules/Button/index.tsx";
import Input from "components/molecules/Input/index.tsx";
import { successAlert, warningAlert } from "lib/sweetAlert.tsx";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorMessage, setErrorMessage] = useState<string>("");

  // 아이디 입력 이벤트
  const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  // 비밀번호 입력 이벤트
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // 로그인 버튼 이벤트
  const handleLogin = async () => {
    // 회원가입 정보
    const data = {
      username,
      password,
    };
    try {
      const response = await axios({
        method: "POST",
        url: "/api/login",
        data,
      });

      if (response.data !== "no") {
        localStorage.setItem("token", response.data);
        localStorage.setItem("username", data.username);
        successAlert("로그인 성공", "환영합니다", "확인").then(() => {
          window.location.href = "/";
        });
      } else {
        setErrorMessage("아이디 또는 비밀번호가 올바르지 않습니다.");
      }
    } catch (error) {
      warningAlert(
        "로그인 실패",
        "이메일 또는 비밀번호가 올바르지 않습니다.",
        "확인"
      );
    }
  };

  return (
    <>
      <Text>로그인</Text>

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

      <Button onClick={handleLogin}>로그인</Button>
      <a href="/signup">
        <Text>회원가입하러 가기</Text>
      </a>
    </>
  );
};

export default Login;
