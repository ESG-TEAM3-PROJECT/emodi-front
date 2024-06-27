"use client";

import { useEffect, useState } from "react";
import Logo from "components/atoms/Logo/index.tsx";
import Text from "components/atoms/Text/index.tsx";
import { successAlert } from "lib/sweetAlert.tsx";
import "./index.css";
import { getJwtCookie } from "utils/authUtil.ts";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getJwtCookie();
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("response");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    successAlert("로그아웃 성공", "로그아웃이 완료되었습니다.", "확인").then(
      () => {
        window.location.href = "/";
      }
    );
  };
  return (
    <>
      <header>
        <h1>
          <a href="/">
            <Logo width={60} />
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="/calendar">
                <Text>달력</Text>
              </a>
            </li>
            <li>
              {isLoggedIn ? (
                <Text onClick={handleLogout} style={{ cursor: "pointer" }}>
                  로그아웃
                </Text>
              ) : (
                <a href="/login">
                  <Text>로그인</Text>
                </a>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
