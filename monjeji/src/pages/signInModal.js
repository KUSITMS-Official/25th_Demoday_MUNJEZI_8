import React from "react";
import "./signInModal.css";
import { Link } from "react-router-dom";

const SignInModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal SignInModal" : "modal"}>
      {open ? (
        <section className="signInSection">
          <header className="signInHeader">
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <input
              name="id"
              className="loginBox"
              type="text"
              placeholder="아이디를 입력해주세요"
            />
            <input
              name="pw"
              className="loginBox"
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </main>
          <footer>
            <button className="loginButton" onClick={close}>
              로그인
            </button>
            <div>
              <Link to="" className="borderRight">
                <button className="loginFindButton">아이디 찾기</button>
              </Link>
              l
              <Link to="">
                <button className="loginFindButton">비밀번호 찾기</button>
              </Link>
            </div>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default SignInModal;
