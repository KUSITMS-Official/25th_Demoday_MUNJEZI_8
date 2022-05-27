import React, { useState } from "react";
import "./MyPage.css";
import { Link } from "react-router-dom";

// import $ from "jquery";

function MyPage() {
  let [userData, setUserData] = useState({
    name: "김가은",
    nickname: "빙가니",
    type: "수험생",
    gender: "여자",
    email: "kcyeun1203@naver.com",
    phoneNum: "010)1234-1234",
    address: "경기도 안산시 사세충열로83",
    kor: "1",
    math: "-",
    eng: "1",
    socSicType1: "soc1",
    socSic1: "1",
    socSicType2: "soc2",
    socSic2: "3",
    history: "1",
    point: 14000,
    review: 15,
    book: 1,
  });

  const onUserDataChange = (e) => {
    const { value, name } = e.target;
    setUserData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const subjects = [
    { key: "soc1", item: "생활과 윤리" },
    { key: "soc2", item: "윤리와 사상" },
    { key: "soc3", item: "사회문화" },
    { key: "soc4", item: "한국지리" },
    { key: "soc5", item: "세계지리" },
    { key: "soc6", item: "정치와 법" },
    { key: "soc7", item: "동아시아사" },
    { key: "soc8", item: "세계사" },
    { key: "sci1", item: "물리1" },
    { key: "sci2", item: "화학1" },
    { key: "sci3", item: "생명과학1" },
    { key: "sci4", item: "지구과학1" },
    { key: "sci5", item: "물리2" },
    { key: "sci6", item: "화학2" },
    { key: "sci7", item: "생명과학2" },
    { key: "sci8", item: "지구과학2" },
  ];

  const SelectBox = (props) => {
    const handleChange = (e) => {
      // 데이터 전송 필요시 사용 할 공간
      console.log(e.target.item);
    };

    return (
      <select defaultValue={props.defaultValue} onChange={handleChange}>
        {props.options.map((option) => (
          <option
            key={option.key}
            value={option.key}
            defaultValue={props.defaultValue === option.key}
          >
            {option.item}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div>
      <div className="myPageTitleLeft">마이페이지</div>
      <div className="myPageDivider" />

      <div className="myPageInfo">
        <div className="userInfoLeft">
          <ul>
            <li>
              <span className="myPageName">
                <span id="hide" />
                <input
                  id="txt"
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={onUserDataChange}
                />
              </span>
              &nbsp;님
            </li>
            <li className="liFlex">
              <div className="infoShort">
                <span id="hide2" />
                <input
                  id="txt2"
                  type="text"
                  name="nickname"
                  value={userData.nickname}
                  onChange={onUserDataChange}
                />
              </div>
            </li>
            <li className="liFlex">
              <div className="infoShort">
                <span id="hide3" />
                <input
                  id="txt3"
                  type="text"
                  name="type"
                  value={userData.type}
                  onChange={onUserDataChange}
                />
              </div>
            </li>
            <li className="liFlex">
              <div className="infoShort">
                <span id="hide4" />
                <input
                  id="txt4"
                  type="text4"
                  name="gender"
                  value={userData.gender}
                  onChange={onUserDataChange}
                />
              </div>
            </li>
            <li className="liFlex">
              <div className="infoShort">
                <span id="hide5" />
                <input
                  id="txt5"
                  type="text"
                  name="email"
                  value={userData.email}
                  onChange={onUserDataChange}
                />
              </div>
            </li>
            <li className="liFlex">
              <div className="infoShort">
                <span id="hide6" />
                <input
                  id="txt6"
                  type="text"
                  name="phoneNum"
                  value={userData.phoneNum}
                  onChange={onUserDataChange}
                />
              </div>
            </li>
            <li className="liFlex">
              <div className="infoLong">
                <span id="hide7" />
                <input
                  id="txt7"
                  type="text"
                  name="address"
                  value={userData.address}
                  onChange={onUserDataChange}
                />
              </div>
            </li>
          </ul>
          <button>저장하기</button>
        </div>
        <div className="userInfoRight">
          <div className="subjectLevel">
            <div>
              <div>
                국어
                <div className="subjectLevelBorder">
                  <input
                    type="text"
                    name="kor"
                    value={userData.kor}
                    onChange={onUserDataChange}
                  />
                  <br />
                  <span>등급</span>
                </div>
              </div>
            </div>
            <div>
              <div>수학</div>
              <div className="subjectLevelBorder">
                <input
                  type="text"
                  name="math"
                  value={userData.math}
                  onChange={onUserDataChange}
                />
                <br />
                <span>등급</span>
              </div>
            </div>
            <div>
              <div>영어</div>
              <div className="subjectLevelBorder">
                <input
                  type="text"
                  name="eng"
                  value={userData.eng}
                  onChange={onUserDataChange}
                />
                <br />
                <span>등급</span>
              </div>
            </div>
          </div>
          <div className="subjectLevel">
            <div>
              <SelectBox
                options={subjects}
                defaultValue={userData.socSicType1}
              />
              <div className="subjectLevelBorder">
                <input
                  type="text"
                  name="socSic1"
                  value={userData.socSic1}
                  onChange={onUserDataChange}
                />
                <br />
                <span>등급</span>
              </div>
            </div>
            <div>
              <SelectBox
                options={subjects}
                defaultValue={userData.socSicType2}
              />
              <div className="subjectLevelBorder">
                <input
                  type="text"
                  name="socSic2"
                  value={userData.socSic2}
                  onChange={onUserDataChange}
                />
                <br />
                <span>등급</span>
              </div>
            </div>
            <div>
              <div>한국사</div>
              <div className="subjectLevelBorder">
                <input
                  type="text"
                  name="history"
                  value={userData.history}
                  onChange={onUserDataChange}
                />
                <br />
                <span>등급</span>
              </div>
            </div>
          </div>
          <button onClick={() => {}}>저장하기</button>
        </div>
      </div>

      <div className="myPageDivider" />

      <div className="myPageUserPoint">
        <div className="userPointInfoLeft">
          <div className="pointTitle">
            나의 문제지 포인트 &nbsp;
            <Link to="/MyPagePoint">
              <img src="../../img/blueArrow.svg" />
            </Link>
          </div>
          <div className="pointTitleScoreBold">{userData.point}P</div>
        </div>
        <div className="UserPointInfoRight">
          <div className="UserPointInfo">
            <div className="pointTitle">
              리뷰 작성하고 포인트 받기 &nbsp;
              <Link to="/ReviewPlus">
                <img src="../../img/blueArrow.svg" />
              </Link>
            </div>
            <div>
              지금까지&nbsp;
              <span className="pointTitleScoreLight">{userData.review}</span>권
              작성했어요
            </div>
          </div>
          <div className="myPageVertical" />
          <div className="UserPointInfo">
            <div className="pointTitle">
              포인트 사용해서 문제집 받기 &nbsp;
              <img src="../../img/blueArrow.svg" />
            </div>
            <div>
              지금까지&nbsp;
              <span className="pointTitleScoreLight">{userData.book}</span>권
              받았어요
            </div>
          </div>
        </div>
      </div>

      <div className="myPageDivider" />

      <div className="myPageHeart">
        <div className="myPageHeartHeader">
          <div />
          <div>하트 누른 목록</div>
        </div>
        <div className="myPageHeartBooks">
          <img src="../img/bookMaDarh.png" />
          <img src="../img/bookMaDarh.png" />
        </div>
      </div>

      <div className="myPageDivider" />
    </div>
  );
}

export default MyPage;
