import React from "react";
import "./reviewLayout.css";
import Korea from "./SubjectReview/korea";
import Math from "./SubjectReview/math";
import Eng from "./SubjectReview/eng";
import Society from "./SubjectReview/society";
import Science from "./SubjectReview/science";
import History from "./SubjectReview/history";
import ReviewListVertical from "./ReviewPage/ReviewListVertical";

function reviewLayout() {
  var url = window.location.pathname;
  var subject = url.substring(url.lastIndexOf("/") + 1);
  // console.log(subject);

  function FilterList() {
    switch (subject) {
      case "korea":
        return <Korea />;
      case "math":
        return <Math />;
      case "eng":
        return <Eng />;
      case "society":
        return <Society />;
      case "science":
        return <Science />;
      case "history":
        return <History />;
    }
  }

  return (
    <div className="reviewLayout">
      <div className="FilterList">
        <FilterList />
      </div>

      {/*세로 구분선*/}
      <div className="reviewDividerVertical"/>

      <div className="ReviewListVertical">
        <ReviewListVertical sub={subject} />
      </div>
    </div>
  );
}

export default reviewLayout;
