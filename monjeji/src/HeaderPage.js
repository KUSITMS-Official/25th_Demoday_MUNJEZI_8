import React, { useState } from "react";
import "./HeaderPage.css";
import { Link, NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import SignInModal from "./pages/signInModal";
import SignUpModal from "./pages/signUpModal";

function HeaderPage() {
  const [cookies, setCookie, removeCookie] = useCookies(["myToken"]);

  console.log(cookies.myToken);
  // cookies.myToken = 1;
  // console.log(cookies.myToken);

  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const [modalSignInOpen, setModalSignInOpen] = useState(false);

  const openSignInModal = () => {
    setModalSignInOpen(true);
  };
  const closeSignInModal = () => {
    setModalSignInOpen(false);
    // window.location.reload();
    cookies.myToken = 1;
    console.log(cookies.myToken);
  };

  const [modalSignUpOpen, setModalSignUpOpen] = useState(false);

  const openSignUpModal = () => {
    setModalSignUpOpen(true);
  };
  const closeSignUpModal = () => {
    setModalSignUpOpen(false);
    // cookies.myToken = 1;
    // console.log(cookies.myToken);
  };

  return (
    <div>
      <div className="headerLogo">
        <Link to="/">
          <img src="../img/logo.svg" alt="" />
        </Link>
      </div>
      <div className="divider" />
      <div className="headerBox">
        <div className="headerBoxLeft">
          <NavLink
            to="/review/korea"
            className={({ isActive }) =>
              isActive ? "headerSubjectClick" : "headerSubject"
            }
          >
            국어
          </NavLink>
          <NavLink
            to="/review/math"
            className={({ isActive }) =>
              isActive ? "headerSubjectClick" : "headerSubject"
            }
          >
            수학
          </NavLink>
          <NavLink
            to="/review/eng"
            className={({ isActive }) =>
              isActive ? "headerSubjectClick" : "headerSubject"
            }
          >
            영어
          </NavLink>
          <NavLink
            to="/review/society"
            className={({ isActive }) =>
              isActive ? "headerSubjectClick" : "headerSubject"
            }
          >
            통사
          </NavLink>
          <NavLink
            to="/review/science"
            className={({ isActive }) =>
              isActive ? "headerSubjectClick" : "headerSubject"
            }
          >
            통과
          </NavLink>
          <NavLink
            to="/review/history"
            className={({ isActive }) =>
              isActive ? "headerSubjectClick" : "headerSubject"
            }
          >
            한국사
          </NavLink>
        </div>

        <div className="headerBoxRight">
          <div className="searchBox">
            <img src="../img/SearchIcon.svg" alt="" />
            <input
              type="text"
              name="search"
              id="search"
              onChange={onChange}
              value={search}
            />
          </div>

          {cookies.myToken ? (
            <>
              <Link to="/myPage">
                <img src="../img/User.svg" className="headerUserIcon" alt="" />
              </Link>
              <Link to="/reviewPlus">
                <img
                  src="../img/reviewPlus.svg"
                  className="headerUserIcon"
                  alt=""
                />
              </Link>
              <Link to="/">
                <img
                  src="../img/noticeBell.svg"
                  className="headerUserIcon"
                  alt=""
                />
              </Link>
            </>
          ) : (
            <>
              <span>
                <button
                  className="headerBtn"
                  style={{ backgroundColor: "white" }}
                  onClick={openSignInModal}
                >
                  로그인
                </button>
                <SignInModal open={modalSignInOpen} close={closeSignInModal} />
              </span>
              <span>
                <button
                  className="headerBtn"
                  style={{ backgroundColor: "#2C2C2C", color: "white" }}
                  onClick={openSignUpModal}
                >
                  회원가입
                </button>
                <SignUpModal open={modalSignUpOpen} close={closeSignUpModal} />
              </span>
            </>
          )}
        </div>
      </div>

      <div className="divider" />
    </div>
  );
}

export default HeaderPage;
