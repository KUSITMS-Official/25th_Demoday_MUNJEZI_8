import React, { useState } from "react";
import "./MyPagePoint.css";

function MyPagePoint() {
  const [userData, setUserData] = useState([
    {
      name: "윤지원",
      point: 14000,
      delPoint: 0,
    },
  ]);

  const type = [
    { value: "all", name: "전체" },
    { value: "accum", name: "적립" },
    { value: "cons", name: "사용" },
  ];

  const during = [
    { key: "3m", item: "3개월" },
    { key: "1m", item: "1개월" },
    { key: "2w", item: "2주" },
  ];

  const SelectBox = (props) => {
    return (
      <select>
        {props.options.map((option) => (
          <option
            value={option.key}
            defaultValue={props.defaultValue === option.item}
          >
            {option.item}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div>
      <div className="myPageTitleLeft">마이페이지 > 나의 문제지 포인트</div>

      <div className="myPageDivider" />

      <div className="myPagePointHeader">
        <div>
          <span>{userData[0].name}</span> 님
        </div>

        <div className="myPageVertical" />

        <div>
          사용 가능 포인트
          <br />
          <span>{userData[0].point}</span>
        </div>

        <div className="myPageVertical" />

        <div>
          이번 달 소멸 예정 포인트
          <br />
          <span>{userData[0].delPoint}</span>
        </div>
      </div>

      <div className="myPageDivider" />

      <div className="myPageSpinner">
        <SelectBox options={type} defaultValue="전체" />
        <SelectBox options={during} defaultValue="3개월" />
      </div>

      <div className="myPagePointList">
        <div className="myPagePointDataAcc">
          <div className="myPagePointAcc">
            <div>적립</div>
          </div>
          <div>
            2022.05.28
            <br />
            <span>리뷰 적립</span>
          </div>
          <div>
            +<span> 32</span> point
          </div>
        </div>

        <div className="myPagePointDiver" />

        <div className="myPagePointDataAcc">
          <div className="myPagePointAcc">
            <div>적립</div>
          </div>
          <div>
            2022.05.14
            <br />
            <span>리뷰 적립</span>
          </div>
          <div>
            +<span> 32</span> point
          </div>
        </div>

        <div className="myPagePointDiver" />

        <div className="myPagePointDataCons">
          <div className="myPagePointCons">
            <div>사용</div>
          </div>
          <div>
            2022.05.14
            <br />
            <span>리뷰 사용</span>
          </div>
          <div>
            -<span> 32</span> point
          </div>
        </div>

        <div className="myPagePointDiver" />

        <div className="myPagePointDataAcc">
          <div className="myPagePointAcc">
            <div>적립</div>
          </div>
          <div>
            2022.05.14
            <br />
            <span>리뷰 적립</span>
          </div>
          <div>
            +<span> 32</span> point
          </div>
        </div>

        <div className="myPagePointDiver" />

        <div className="myPagePointDataAcc">
          <div className="myPagePointAcc">
            <div>적립</div>
          </div>
          <div>
            2022.05.14
            <br />
            <span>리뷰 적립</span>
          </div>
          <div>
            +<span> 32</span> point
          </div>
        </div>

        <div className="myPagePointDiver" />
      </div>
    </div>
  );
}

export default MyPagePoint;
