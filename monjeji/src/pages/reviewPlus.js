import React, { useState } from "react";
import "./reviewPlus.css";
import { Link } from "react-router-dom";

function ReviewPlus() {
  // 0=기본 1=자이스토리, 2=서치 결과 없음
  const [visible, setVisible] = useState(0);
  const guide =
    "주관적인 리뷰를 작성해주세요.\n사진 인증시 포인트를 더 드려요!";
  const xi = "자이스토리";

  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="myPageTitleLeft">리뷰 등록</div>
      <div className="myPageDivider" />
      <div className="reviewBookInfo">
        <input className="reviewBookEmpty" type="image" src="" alt="" />
        <div className="reviewBookSearch">
          <div className="reviewRating">
            <input
              type="checkbox"
              name="rating"
              id="rating1"
              value="1"
              className="rate_radio"
              title="1점"
            />
            <label htmlFor="rating1" />
            <input
              type="checkbox"
              name="rating"
              id="rating2"
              value="2"
              className="rate_radio"
              title="2점"
            />
            <label htmlFor="rating2" />
            <input
              type="checkbox"
              name="rating"
              id="rating3"
              value="3"
              className="rate_radio"
              title="3점"
            />
            <label htmlFor="rating3" />
            <input
              type="checkbox"
              name="rating"
              id="rating4"
              value="4"
              className="rate_radio"
              title="4점"
            />
            <label htmlFor="rating4" />
            <input
              type="checkbox"
              name="rating"
              id="rating5"
              value="5"
              className="rate_radio"
              title="5점"
            />
            <label htmlFor="rating5" />
          </div>
          <div className="reviewBookSearchBar">
            <button
              className="reviewBookSearchBtn"
              onClick={() => {
                setVisible(xi === search ? 1 : 2);
                console.log(visible);
              }}
            />
            <input
              type="text"
              className="reviewBookSearchInput"
              placeholder="문제집을 선택해주세요"
              onChange={onChangeSearch}
            />
          </div>
          <div className="reviewBookSearchList">
            {visible === 0 ? (
              <div />
            ) : visible === 1 ? (
              <img
                className="reviewBookSearchDataXi"
                src="../../img/bookXiStory.svg"
                alt="자이스토리 이미지"
              />
            ) : (
              <div className="reviewBookSearchNot">
                <img src="../../img/unHappy.svg" alt=";ㅅ;" />
                <div>
                  <span>'{search}'</span>이라는 문제집이 문제지에 등록되어있지
                  않아요
                </div>
                <div>
                  문제집 등록 신청하기
                  <Link to="/BookSignUp">
                    <img
                      className="reviewBookSearchNotBtn"
                      src="../../img/linkButton.svg"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="reviewBookDetail">
        <button>+</button>
        <textarea
          placeholder="주관적인 리뷰를 작성해주세요.&#13;&#10;사진 인증시 포인트를 더 드려요!"
        />

        <button>
          <Link
            to="/myPage"
            style={{ "text-decoration": "none", color: "white" }}
          >
            등록
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ReviewPlus;
