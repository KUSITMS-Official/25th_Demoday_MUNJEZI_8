import React, { useState } from "react";
import "./bookSignUp.css";
import { Link } from "react-router-dom";

function BookSignUp() {
  const subjectTag = [
    { id: 1, name: "국어" },
    { id: 2, name: "수학" },
    { id: 3, name: "영어" },
    { id: 4, name: "통사" },
    { id: 5, name: "통과" },
    { id: 6, name: "한국사" },
  ];

  const detailCommonTag = [
    { id: 1, name: "가독성이 좋은" },
    { id: 2, name: "신유형 수록" },
    { id: 3, name: "매력적인 오답을 설명하는" },
    { id: 4, name: "친구들이 많이 푸는" },
    { id: 5, name: "정답률 표기가 되어있는" },
    { id: 6, name: "문제 배치-모의고사" },
    { id: 7, name: "문제 배치-주제/유형" },
  ];

  const detailKorTag = [
    { id: 1, name: "해설에 지문과 문제를 제시하는" },
    { id: 2, name: "문제 접근법을 설명하는" },
    { id: 3, name: "어휘 설명 제공" },
    { id: 4, name: "개념어 설명 제공" },
    { id: 5, name: "작품 배경지식 제공" },
  ];

  const detailMathTag = [
    { id: 1, name: "다양한 풀이방법 제공" },
    { id: 2, name: "풀이과정이 상세한" },
    { id: 3, name: "빠른 정답지가 있는" },
    { id: 4, name: "평가원 위주" },
    { id: 5, name: "교육청/사설 위주" },
    { id: 6, name: "경찰대/사관학교 기출 포함" },
    { id: 7, name: "현재교육과정으로는 풀 수 없는" },
  ];

  const detailEngTag = [
    { id: 1, name: "mp3 파일을 제공하는" },
    { id: 2, name: "선지별 정오답 근거 제공" },
    { id: 3, name: "경찰대/사관학교 기출 포함" },
    { id: 4, name: "딕테이션(받아쓰기)이 있는" },
    { id: 5, name: "문제 접근법을 설명하는" },
    { id: 6, name: "단어장을 제공하는" },
  ];

  const detailSocTag = [
    { id: 1, name: "OX 부록을 제공하는" },
    { id: 2, name: "개념 요약 노트" },
    { id: 3, name: "빈칸문제 제공는" },
    { id: 4, name: "핵심 자료분석 제공" },
    { id: 5, name: "문제 접근법이 있는" },
    { id: 6, name: "킬러문항을 다루는" },
    { id: 7, name: "선지별 첨삭해설 수록" },
  ];

  const detailSciTag = [
    { id: 1, name: "풀이과정이 상세한" },
    { id: 2, name: "암기노트제공" },
    { id: 3, name: "선지별 해설을 제공하는" },
    { id: 4, name: "킬러유형  다수포함" },
  ];

  const detailHisTag = [
    { id: 1, name: "실전모의고사 포함" },
    { id: 2, name: "커리큘럼 표 제공" },
    { id: 3, name: "2주 컷" },
    { id: 4, name: "한달 컷" },
    { id: 5, name: "OX 문제 수록" },
    { id: 6, name: "개념 요약 수록" },
    { id: 7, name: "선지별 정오답 근거 제공" },
  ];

  const [values, setValues] = useState({
    subjectTag: "",
    commonTag: "",
    detailTag: "",
  });

  const handleChangeRadio = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  let Detail = () => {
    switch (values.subjectTag) {
      case "1":
        return (
          <div>
            {detailKorTag.map((data) => (
              <span>
                <input
                  type="checkbox"
                  value={data.id}
                  name="detailTag"
                  onChange={handleChangeRadio}
                />
                <label htmlFor={data.id}> {data.name} </label>
              </span>
            ))}
          </div>
        );
      case "2":
        return (
          <div>
            {detailMathTag.map((data) => (
              <span>
                <input
                  type="checkbox"
                  value={data.id}
                  name="detailTag"
                  onChange={handleChangeRadio}
                />
                <label htmlFor={data.id}> {data.name} </label>
              </span>
            ))}
          </div>
        );
      case "3":
        return (
          <div>
            {detailEngTag.map((data) => (
              <span>
                <input
                  type="checkbox"
                  value={data.id}
                  name="detailTag"
                  onChange={handleChangeRadio}
                />
                <label htmlFor={data.id}> {data.name} </label>
              </span>
            ))}
          </div>
        );
      case "4":
        return (
          <div>
            {detailSocTag.map((data) => (
              <span>
                <input
                  type="checkbox"
                  value={data.id}
                  name="detailTag"
                  onChange={handleChangeRadio}
                />
                <label htmlFor={data.id}> {data.name} </label>
              </span>
            ))}
          </div>
        );
      case "5":
        return (
          <div>
            {detailSciTag.map((data) => (
              <span>
                <input
                  type="checkbox"
                  value={data.id}
                  name="detailTag"
                  onChange={handleChangeRadio}
                />
                <label htmlFor={data.id}> {data.name} </label>
              </span>
            ))}
          </div>
        );
      case "6":
        return (
          <div>
            {detailHisTag.map((data) => (
              <span>
                <input
                  type="checkbox"
                  value={data.id}
                  name="detailTag"
                  onChange={handleChangeRadio}
                />
                <label htmlFor={data.id}> {data.name} </label>
              </span>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="myPageTitleLeft">문제지 등록 신청하기</div>
      <div className="myPageDivider" />
      <div className="bookSignUpInfo">
        <div className="bookSignUpSearchBar">
          <button className="reviewBookSearchBtn" />
          <input
            type="text"
            className="reviewBookSearchInput"
            placeholder="ISBN 코드 입력"
          />
        </div>
        <div className="bookSignupISBN">
          <div className="bookSignupISBNBtn">
            <p className="bookSignUpArrowBox">
              <img src="../../img/barcode.svg" />
              <div>
                International Standard Book Number, 국제 표준 도서 번호를 뜻하는
                단어에요.
                <br />
                각 책의 고유 숫자로써 세계 방방곡곡에서 출판되는 모든 종류의
                책들에
                <br />
                <span>개별적인 고유번호</span>를 주어 도서들의 정보와 유통을
                효율적으로 관리하는 제도에요
                <br />
                <br />
                주로 <span>책 뒷편 바코드</span>에 적혀있답니다 : )
              </div>
            </p>
          </div>
          <div>ISBN 코드란?</div>
        </div>
        <div className="bookSignUpInfoSub">
          과목
          <div className="bookSignUpSubTags">
            {subjectTag.map((data) => (
              <span>
                <input
                  type="radio"
                  value={data.id}
                  name="subjectTag"
                  onChange={handleChangeRadio}
                />
                <label htmlFor={data.id}> {data.name} </label>
              </span>
            ))}
          </div>
        </div>
        {values.subjectTag === "" ? (
          <div />
        ) : (
          <div className="bookSignUpDetailTag">
            세부 태그
            <div className="bookSignUpComTags">
              {detailCommonTag.map((data) => (
                <span>
                  <input
                    type="checkbox"
                    value={data.id}
                    name="commonTag"
                    onChange={handleChangeRadio}
                  />
                  <label htmlFor={data.id}> {data.name} </label>
                </span>
              ))}
              <Detail />
            </div>
            <div className="bookSignUpDetail">
              <button>+</button>
              <textarea
                placeholder="주관적인 리뷰를 작성해주세요.&#13;&#10;사진 인증시 포인트를 더 드려요!"
              />
              <button>
                {" "}
                <Link
                  to="/myPage"
                  style={{ "text-decoration": "none", color: "white" }}
                >
                  등록
                </Link>
              </button>
            </div>
            <div className="bookSignUpCommend">
              * 부적절한 게시글을 작성했을시, 서비스 활동이 제한될 수 있으며
              게시글을 임의로 삭제할 수 있습니다.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookSignUp;
