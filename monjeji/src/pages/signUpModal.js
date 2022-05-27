import React from "react";
import './signUpModal.css';
import {Link} from "react-router-dom";

const SignUpModal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const {open, close, header} = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal SignUpModal' : 'modal'}>
            {open ? (
                <section className="signUpSection">
                    <header className="signUpHeader">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>
                        <div className="signUpTop">
                            <div className="signUpTopLeft">
                                회원가입
                            </div>
                            <div className="signUpTopRight">
                                <span>*</span> 필수 입력 사항
                            </div>
                        </div>
                        <div className="divider"/>
                        <div className="signUpMidBox">
                            <div>아이디 <span>*</span></div>
                            <input name="id" className="signUpBox" type="text" placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"/>
                            <button>중복확인</button>
                        </div>
                        <div className="signUpMidBox">
                            <div>비밀번호 <span>*</span></div>
                            <input name="pw" className="signUpBox" type="text" placeholder="비밀번호를 입력해주세요"/>
                        </div>
                        <div className="signUpMidBox">
                            <div>비밀번호 확인 <span>*</span></div>
                            <input name="pwCheck" className="signUpBox" type="text" placeholder="비밀번호를 한번 더 입력해주세요"/>
                        </div>
                        <div className="signUpMidBox">
                            <div>이름 <span>*</span></div>
                            <input name="name" className="signUpBox" type="text" placeholder="이름를 입력해주세요"/>
                        </div>
                        <div className="signUpMidBox">
                            <div>휴대폰 <span>*</span></div>
                            <input name="phoneNum" className="signUpBox" type="text" placeholder="숫자만 입력해주세요"/>
                        </div>
                        <div className="signUpMidBox">
                            <div>성별</div>
                            <div className="signUpBoxRadio">
                                <input name="gender" type="radio" id="gender1"/><label
                                htmlFor="gender1"/><span>여자</span>
                                <input name="gender" type="radio" id="gender2"/><label
                                htmlFor="gender2"/><span>남자</span>
                                <input name="gender" type="radio" id="gender3"/><label
                                htmlFor="gender3"/><span>선택 안함</span>
                            </div>
                        </div>
                        <div className="signUpMidBox">
                            <div>직업</div>
                            <input name="address" className="signUpBox" type="text" placeholder="직업스크롤"/>
                        </div>
                        <div className="signUpMidBox">
                            <div>주소</div>
                            <input name="address" className="signUpBox" type="text" placeholder="주소를 입력해주세요"/>
                        </div>
                        <div className="signUpMidBox">
                            <div>이용약관 동의 <span>*</span></div>
                            <div className="signUpBoxCheck">
                                <input name="agree" type="checkbox" id="agree"/><label
                                htmlFor="agree"/><span>동의합니다</span>
                            </div>
                        </div>
                        <div className="signUpMidBox">
                            <span>약관 보러가기 ></span>
                        </div>
                    </main>
                    <footer>
                        <button className="signUpButton" onClick={close}>
                            로그인
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

export default SignUpModal;
