import React, { useEffect, useState } from "react";
import "./subjectReview.css";
import axios from "axios";

function History() {
  const typeTagData = [
    { id: 1, name: "개념" },
    { id: 2, name: "응용" },
    { id: 3, name: "기출" },
    { id: 4, name: "실전(봉투)" },
    { id: 5, name: "연계(EBS)" },
  ];

  const levelTagData = [
    { id: 1, name: "쉬움" },
    { id: 2, name: "보통" },
    { id: 3, name: "어려움" },
  ];
  const commonTagData = [
    { id: 1, name: "가독성이 좋은" },
    { id: 2, name: "신유형 수록" },
    { id: 3, name: "매력적인 오답을 설명하는" },
    { id: 4, name: "친구들이 많이 푸는" },
    { id: 5, name: "정답률 표기가 되어있는" },
    { id: 6, name: "문제 배치-모의고사" },
    { id: 7, name: "문제 배치-주제/유형" },
  ];

  const subjectTagData = [
    { id: 1, name: "실전모의고사 포함" },
    { id: 2, name: "커리큘럼 표 제공" },
    { id: 3, name: "2주 컷" },
    { id: 4, name: "한달 컷" },
    { id: 5, name: "OX 문제 수록" },
    { id: 6, name: "개념 요약 수록" },
    { id: 7, name: "선지별 정오답 근거 제공" },
  ];
  const [values, setValues] = useState({
    detailTag: "",
    typeTag: "",
    levelTag: "",
    commonTag: "",
    subjectTag: "",
  });

  const handleChangeRadio = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

  const clearHandle = () => {
    alert("clear!");
    setValues(" ");
  };
  const resultHandle = () => {
    const obj = {
      detailTag: values.detailTag,
      typeTag: values.typeTag,
      levelTag: values.levelTag,
      commonTag: values.commonTag,
      subjectTag: values.subjectTag,
    };

    console.log(obj);

    /**
         axios
         .post("/api/filter/korea", obj)
         .then((res) => (res) => console.log("info add success"))
         .catch((err) => {
        alert("필터 검색에 오류 발생");
      });

         */
  };
  return (
    <div>
      {/*세부과목 없음*/}

      {/*문제유형*/}
      <div className="filter-frame">
        <div className="deco-divider" />
        <div className="filterBox">
          <div className="filterBoxTitle">문제유형</div>
          <div className="filterBoxBlue">
            {typeTagData.map((data) => (
              <span>
                <input
                  type="checkBox"
                  value={data.id}
                  name="typeTag"
                  onChange={handleChangeRadio}
                />
                <label key={data.id}> {data.name} </label>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/*난이도*/}
      <div className="filter-frame">
        <div className="deco-divider" />
        <div className="filterBox">
          <div className="filterBoxTitle">난이도</div>
          <div className="filterBoxBlue">
            {levelTagData.map((data) => (
              <span>
                <input
                  type="checkBox"
                  value={data.id}
                  name="commonTag"
                  onChange={handleChangeRadio}
                />
                <label key={data.id}> {data.name} </label>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/*공통 Munjezi 태그*/}
      <div className="filter-frame">
        <div className="deco-divider" />
        <div className="filterBox">
          <div className="filterBoxTitle">공통 Munjezi 태그</div>
          <div className="filterBoxBlue">
            {commonTagData.map((data) => (
              <span>
                <input
                  type="checkBox"
                  value={data.id}
                  name="commonTag"
                  onChange={handleChangeRadio}
                />
                <label key={data.id}> {data.name} </label>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/*한국사 Munjezi 태그*/}
      <div className="filter-frame">
        <div className="deco-divider" />
        <div className="filterBox">
          <div className="filterBoxTitle">한국사 Munjezi 태그</div>
          <div className="filterBoxBlue">
            {subjectTagData.map((data) => (
              <span>
                <input
                  type="checkBox"
                  value={data.id}
                  name="subjectTag"
                  onChange={handleChangeRadio}
                />
                <label key={data.id}> {data.name} </label>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/*과목 문제지 데이터*/}
      <div className="filter-footer">
        <div className="filter-footer-clear" onClick={clearHandle}>
          초기화
        </div>
        <div className="filter-footer-result" onClick={resultHandle}>
          태그적용
        </div>
      </div>
    </div>
  );
}

export default History;
