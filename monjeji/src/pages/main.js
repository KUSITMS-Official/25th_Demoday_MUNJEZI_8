import React from "react";
import "./main.css";
import Banner from "./Banner";
import ReviewListHorizon from "./ReviewPage/ReviewListHorizon";

function main() {
    return (
        <div>
            <Banner/>
            <div className="bestReview">
                <div className="main-divider"/>
                <div>Best Review</div>
                <div className="main-divider"/>
            </div>
            <ReviewListHorizon/>

        </div>
    );
}

export default main;
