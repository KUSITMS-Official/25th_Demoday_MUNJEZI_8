import React, { useEffect, useState } from "react";
import "./subjectReview.css";
import getApi from "../../api/getApi";

import axios from "axios";

function Korea() {
  const detailTagData = [
    { num: 1, name: "독서" },
    { num: 2, name: "문학" },
    { num: 3, name: "언어와 매체" },
    { num: 4, name: "화법과 작문" },
  ];

  const typeTagData = [
    { num: 1, name: "개념" },
    { num: 2, name: "응용" },
    { num: 3, name: "기출" },
    { num: 4, name: "실전(봉투)" },
    { num: 5, name: "연계(EBS)" },
  ];

  const levelTagData = [
    { num: 1, name: "쉬움" },
    { num: 2, name: "보통" },
    { num: 3, name: "어려움" },
  ];
  const commonTagData = [
    { num: 1, name: "가독성이 좋은" },
    { num: 2, name: "신유형 수록" },
    { num: 3, name: "매력적인 오답을 설명하는" },
    { num: 4, name: "친구들이 많이 푸는" },
    { num: 5, name: "정답률 표기가 되어있는" },
    { num: 6, name: "문제 배치-모의고사" },
    { num: 7, name: "문제 배치-주제/유형" },
  ];

  const subjectTagData = [
    { num: 1, name: "해설에 지문과 문제를 제시하는" },
    { num: 2, name: "문제 접근법을 설명하는" },
    { num: 3, name: "어휘 설명 제공" },
    { num: 4, name: "개념어 설명 제공" },
    { num: 5, name: "작품 배경지식 제공" },
  ];
  const [values, setValues] = useState({
    detailTag: "",
    typeTag: "",
    levelTag: "",
    commonTag: "",
    subjectTag: "",
  });

  const [checkedItem, setCheckedItem] = useState(false);

  const [numData, setNumData] = useState([
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  ]);

  const handleChangeRadio = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

  const clearHandle = () => {
    alert("clear!");
    setValues({
      detailTag: "",
      typeTag: "",
      levelTag: "",
      commonTag: "",
      subjectTag: "",
    });
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

    // tagSame, = tagSame
    // tagSubject, =subSubject
    // questionType, =typeTag
    // level, = levelTag
    // subSubject, =detailTag

    // axios
    //   .get(
    //     `/search/filtering/apply?tagSame=${obj.commonTag}&tagSubject=${obj.subjectTag}&questionType=${obj.typeTag}&level=${obj.levelTag}&subSubject=${obj.detailTag}&tagSame=${obj.commonTag}`
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch(function (e) {
    //     // 오류발생시 실행
    //     console.log(e);
    //   });

    getApi(
      {},
      `/search/filtering/apply?tagSame=${obj.commonTag}&tagSubject=${obj.subjectTag}&questionType=${obj.typeTag}&level=${obj.levelTag}&subSubject=${obj.detailTag}&tagSame=${obj.commonTag}`,
      obj
    )
      .then(({ status, data }) => {
        if (status === 200) {
          console.log(data);
        }
      })
      .catch((err) => {
        alert("필터 검색에 오류 발생");
        console.log(err);
      });

    // postApi();
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
                  value={data.num}
                  name="detailTag"
                  onChange={handleChangeRadio}
                />
                <label key={data.num}>{data.name} </label>
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
                  value={data.num}
                  name="typeTag"
                  onChange={handleChangeRadio}
                />
                <label key={data.num}> {data.name} </label>
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
                  value={data.num}
                  name="levelTag"
                  onChange={handleChangeRadio}
                />
                <label key={data.num}> {data.name} </label>
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
                  value={data.num}
                  name="commonTag"
                  onChange={handleChangeRadio}
                />
                <label key={data.num}> {data.name} </label>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/*국어 Munjezi 태그*/}
      <div className="filter-frame">
        <div className="deco-divider" />
        <div className="filterBox">
          <div className="filterBoxTitle">국어 Munjezi 태그</div>
          <div className="filterBoxBlue">
            {subjectTagData.map((data) => (
              <span>
                <input
                  type="checkBox"
                  value={data.num}
                  name="subjectTag"
                  onChange={handleChangeRadio}
                />
                <label key={data.num}> {data.name} </label>
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

export default Korea;
