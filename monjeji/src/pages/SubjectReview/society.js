import React, { useEffect, useState } from "react";
import "./subjectReview.css";

function Society() {
  const detailTagData = [
    { id: 1, name: "생활과 윤리" },
    { id: 2, name: "윤리와 사상" },
    { id: 3, name: "사회문화" },
    { id: 4, name: "한국지리" },
    { id: 5, name: "세계지리" },
    { id: 6, name: "정치와 법" },
    { id: 7, name: "동아시아사" },
    { id: 8, name: "세계사" },
    { id: 9, name: "경제" },
  ];

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
    { id: 1, name: "OX 부록을 제공하는" },
    { id: 2, name: "개념 요약 노트" },
    { id: 3, name: "빈칸문제 제공는" },
    { id: 4, name: "핵심 자료분석 제공" },
    { id: 5, name: "문제 접근법이 있는" },
    { id: 6, name: "킬러문항을 다루는" },
    { id: 7, name: "선지별 첨삭해설 수록" },
  ];
  const [values, setValues] = useState({
    detailTag: "",
    typeTag: "",
    levelTag: "",
    commonTag: "",
    subjectTag: "",
  });

  const [checkedItem, setCheckedItem] = useState(false);

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
  };

  return (
    <div>
      {/*세부과목*/}
      <div className="filter-frame">
        <div className="deco-divider" />
        <div className="filterBox">
          <div className="filterBoxTitle">세부과목</div>
          <div className="filterBoxBlue">
            {detailTagData.map((data) => (
              <span>
                <input
                  type="checkBox"
                  value={data.id}
                  name="detailTag"
                  onChange={handleChangeRadio}
                />
                <label key={data.id}>{data.name} </label>
              </span>
            ))}
          </div>
        </div>
      </div>

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

      {/*사회 Munjezi 태그*/}
      <div className="filter-frame">
        <div className="deco-divider" />
        <div className="filterBox">
          <div className="filterBoxTitle">사회 Munjezi 태그</div>
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

export default Society;
