import Text from "components/atoms/Text/index.tsx";
import Button from "components/molecules/Button/index.tsx";
import Input from "components/molecules/Input/index.tsx";

const Login = () => {
  return (
    <>
      <Text>아이디</Text>
      <Input name="email" type="text" placeholder="이메일" />
      <Text>비밀번호</Text>
      <Input name="password" type="password" placeholder="비밀번호" />
      <Button>로그인</Button>
    </>
  );
};

export default Login;
