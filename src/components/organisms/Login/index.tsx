import axios from "axios";
import Text from "components/atoms/Text/index.tsx";
import Button from "components/molecules/Button/index.tsx";
import Input from "components/molecules/Input/index.tsx";
import { successAlert, warningAlert } from "lib/sweetAlert.tsx";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
        // localStorage.setItem("username", response.data.username);
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
      <Text>아이디</Text>
      <Input
        name="username"
        type="text"
        placeholder="아이디"
        onChange={handleUsernameInput}
      />
      <Text>비밀번호</Text>
      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        onChange={handlePasswordInput}
      />
      <Button onClick={handleLogin}>로그인</Button>
    </>
  );
};

export default Login;
