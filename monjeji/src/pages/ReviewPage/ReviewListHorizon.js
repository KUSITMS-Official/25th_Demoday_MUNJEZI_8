import React, {useState} from "react";
import "./ReviewListHorizon.css";


function ReviewListHorizon() {

    const [bookData, setBookData] = useState([{
        name: "자이스토리 독해 기본",
        imgSrc: "../img/bookXiStory.png",
        subject: "수학",
        easyLevel: 1,
        tag1: "매력적인 오답을 설명하는",
        tag2: "친구들이 많이 푸는",
        tag3: "교육청/사설 위주",
        tag4: "문제지 배치-모의고사"
    }, {
        name: "기출의 바이블",
        imgSrc: "../img/bookBible.png",
        subject: "과탐",
        easyLevel: 1,
        tag1: "매력적인 오답을 설명하는",
        tag2: "친구들이 많이 푸는",
        tag3: "교육청/사설 위주",
        tag4: "문제지 배치-모의고사"
    }, {
        name: "센 - 수학 1",
        imgSrc: "../img/bookSsen.png",
        subject: "수학",
        easyLevel: 1,
        tag1: "매력적인 오답을 설명하는",
        tag2: "친구들이 많이 푸는",
        tag3: "교육청/사설 위주",
        tag4: "문제지 배치-모의고사"
    }, {
        name: "마르고 닳도록 2",
        imgSrc: "../img/bookMaDarh.png",
        subject: "국어",
        easyLevel: 1,
        tag1: "매력적인 오답을 설명하는",
        tag2: "친구들이 많이 푸는",
        tag3: "교육청/사설 위주",
        tag4: "문제지 배치-모의고사"
    }, {
        name: "자이스토리 독해 기본",
        imgSrc: "../img/bookXiStory.png",
        subject: "영어",
        easyLevel: 1,
        tag1: "매력적인 오답을 설명하는",
        tag2: "친구들이 많이 푸는",
        tag3: "교육청/사설 위주",
        tag4: "문제지 배치-모의고사"
    }, {
        name: "자이스토리 독해 기본",
        imgSrc: "../img/bookXiStory.png",
        subject: "영어",
        easyLevel: 1,
        tag1: "매력적인 오답을 설명하는",
        tag2: "친구들이 많이 푸는",
        tag3: "교육청/사설 위주",
        tag4: "문제지 배치-모의고사"
    }])

    function bestBooks() {
        let bookList = [];
        for (let i = 0; i < 6; i += 2) {
            bookList.push(
                <div className="displayTwoData">

                    <div className="horizonCard" style={{width: 660, height: 330}}>
                        <img src={bookData[i].imgSrc} alt=""/>
                        <div className="cardTextHorizon">
                            <div>{bookData[i].subject}</div>
                            <div>{bookData[i].name}</div>
                            <div>{bookData[i].easyLevel}등급 학생들이 쉽다고 리뷰했어요</div>
                            <div>{bookData[i].tag1}</div>
                            <div/>
                            <div>{bookData[i].tag2}</div>
                            <div/>
                            <div>{bookData[i].tag3}</div>
                            <div/>
                            <div>{bookData[i].tag4}</div>
                        </div>
                    </div>
                    <div className="ReviewListHorizonVertical"/>

                    <div className="horizonCard" style={{width: 660, height: 330}}>
                        <img src={bookData[i + 1].imgSrc} alt=""/>
                        <div className="cardTextHorizon">
                            <div>{bookData[i + 1].subject}</div>
                            <div>{bookData[i + 1].name}</div>
                            <div>{bookData[i + 1].easyLevel}등급 학생들이 쉽다고 리뷰했어요</div>
                            <div>{bookData[i + 1].tag1}</div>
                            <div/>
                            <div>{bookData[i + 1].tag2}</div>
                            <div/>
                            <div>{bookData[i + 1].tag3}</div>
                            <div/>
                            <div>{bookData[i + 1].tag4}</div>
                        </div>
                    </div>

                </div>
            )
        }
        return bookList;
    }

    return (
        <div>
            <div className="reviewList">
                {bestBooks()}
            </div>
            <div style={{height: 100}}/>
        </div>
    );
}

export default ReviewListHorizon;
