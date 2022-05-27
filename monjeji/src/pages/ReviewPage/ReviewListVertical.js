import React, { useState } from "react";
import "./ReviewListVertical.css";
import styled from "styled-components";
import data_korea from "./data_korea";
import data_eng from "./data_eng";
import data_math from "./data_math";
import getApi from "../../api/getApi";
import axios from "axios";

function ReviewList(props) {
  var bookData = [];
  var sub = props.sub;
  switch (sub) {
    case "korea":
      bookData = data_korea;
      break;
    case "eng":
      bookData = data_eng;
      break;
    case "math":
      bookData = data_math;
      break;
  }

  const [state, setState] = useState([]);

  const testNum = [
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  ];

  // axios
  //   .get(url)
  //   .then((responseData) => {
  //     const data = responseData.data;
  //     const results = data.results;
  //     // console.log(results);
  //     setState(results);
  //   })
  //   .catch((error) => console.log(error));

  // ===============================
  // 서버에서 받은 필터링된 data num / 걸러진 data의 num이 state에 담김
  // ===============================

  getApi({}, `/search/filtering/first?orderling=2`)
    .then(({ status, data }) => {
      // setState(numData);
      if (status === 200) {
        console.log("Review List Vertical ");
        console.log(data);
      }
    })
    .catch((e) => {
      console.log(e);
    });

  //==================================================
  // const [result, setResult] = useState([]);
  const setResult = [];

  // state == 더미데이터 (data_korea)
  // testNum == 백에서 바당온 정제된 데이터의 Num 값 (state)
  // result == 더미데이터에서 해당되는 Num을 추출해서 만든 새로운 배열 데이터

  for (var i = 0; i < testNum.length; i++) {
    // index -> num
    const resultData = bookData.find((v) => v.num == testNum[i]);
    // console.log(resultData);
    if (!resultData) {
      console.log("해당되는 데이터가 없습니다.");
    } else {
      setResult.push(resultData);
    }
  }

  //==================================================

  function subjectBooks() {
    let bookList = [];
    let arrayCount = Math.floor(setResult.length / 3);
    for (let i = 0; i < setResult.length; i += 3) {
      if (i === arrayCount * 3) {
        if (setResult.length % 3 === 1) {
          bookList.push(
            <div className="displayThreeData">
              <div className="verticalCard" style={{ width: 300, height: 450 }}>
                <img src={setResult[i].imgSrc} alt="" />
                <div>{setResult[i].subject}</div>
                <div>
                  {setResult[i].name}
                  <img src="../../img/Heart.svg" />
                </div>
                <div>
                  회원님과&nbsp;
                  <span>{setResult[i].compare} 성적</span>의 유저들이
                  <span>{setResult[i].level}</span>고 리뷰했어요
                </div>
              </div>
              <div className="ReviewListHorizonVertical" />

              <div
                className="verticalCard"
                style={{ width: 300, height: 450 }}
              />

              <div className="ReviewListHorizonVertical" />

              <div
                className="verticalCard"
                style={{ width: 300, height: 450 }}
              />
            </div>
          );
        } else {
          bookList.push(
            <div className="displayThreeData">
              <div className="verticalCard" style={{ width: 300, height: 450 }}>
                <img src={setResult[i].imgSrc} alt="" />
                <div>{setResult[i].subject}</div>
                <div>
                  {setResult[i].name}
                  <img src="../../img/Heart.svg" />
                </div>
                <div>
                  회원님과&nbsp;
                  <span>{setResult[i].compare} 성적</span>의 유저들이
                  <span>{setResult[i].level}</span>고 리뷰했어요
                </div>
              </div>
              <div className="ReviewListHorizonVertical" />
              <div className="verticalCard" style={{ width: 300, height: 450 }}>
                <img src={setResult[i + 1].imgSrc} alt="" />
                <div>{setResult[i + 1].subject}</div>
                <div>
                  {setResult[i + 1].name}
                  <img src="../../img/Heart.svg" />
                </div>
                <div>
                  회원님과&nbsp;
                  <span>{setResult[i + 1].compare} 성적</span>의 유저들이
                  <span>{setResult[i + 1].level}</span>고 리뷰했어요
                </div>
              </div>
              <div className="ReviewListHorizonVertical" />
              <div
                className="verticalCard"
                style={{ width: 300, height: 450 }}
              />
            </div>
          );
        }
      } else {
        bookList.push(
          <div className="displayThreeData">
            <div className="verticalCard" style={{ width: 300, height: 450 }}>
              <img src={setResult[i].imgSrc} alt="" />
              <div>{setResult[i].subject}</div>
              <div>
                {setResult[i].name}
                <img src="../../img/Heart.svg" />
              </div>
              <div>
                회원님과&nbsp;
                <span>{setResult[i].compare} 성적</span>의 유저들이
                <span>{setResult[i].level}</span>고 리뷰했어요
              </div>
            </div>
            <div className="ReviewListHorizonVertical" />
            <div className="verticalCard" style={{ width: 300, height: 450 }}>
              <img src={setResult[i + 1].imgSrc} alt="" />
              <div>{setResult[i + 1].subject}</div>
              <div>
                {setResult[i + 1].name}
                <img src="../../img/Heart.svg" />
              </div>
              <div>
                회원님과&nbsp;
                <span>{setResult[i + 1].compare} 성적</span>의 유저들이
                <span>{setResult[i + 1].level}</span>고 리뷰했어요
              </div>
            </div>
            <div className="ReviewListHorizonVertical" />
            <div className="verticalCard" style={{ width: 300, height: 450 }}>
              <img src={setResult[i + 2].imgSrc} alt="" />
              <div>{setResult[i + 2].subject}</div>
              <div>
                {setResult[i + 2].name}
                <img src="../../img/Heart.svg" />
              </div>
              <div>
                회원님과&nbsp;
                <span>{setResult[i + 2].compare} 성적</span>의 유저들이
                <span>{setResult[i + 2].level}</span>고 리뷰했어요
              </div>
            </div>
          </div>
        );
      }
    }
    return bookList;
  }

  return (
    <div>
      <div></div>
      <div className="reviewList">{subjectBooks()}</div>
      <div style={{ height: 100 }} />
    </div>
  );
}

export default ReviewList;
