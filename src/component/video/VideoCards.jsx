import React from "react";
import moment from "moment";

const VideoCards = (props) => {
  return (
    <div className="videoGames">
      <div className="list_item">
        <div
          className="image"
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "black",
            flex: 0.3,
          }}
        ></div>
        <div className="summaryBox" style={{ flex: 0.4 }}>
          <h3> {props.item?.name}</h3>
          <h4>
            Release Date:
            {moment(new Date(props.item?.first_release_date)).format(
              "YYYY-MM-DD"
            )}
          </h4>
          <p>{props.item?.summary}</p>
        </div>
        <div className="scoreContainer" style={{ flex: 0.3 }}>
          <div className="score">
            {Math.floor(parseFloat(props.item?.rating).toFixed(1) / 10)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
