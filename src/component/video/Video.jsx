import React, { useEffect, useState } from "react";
import "./video.css";
import VideoCards from "./VideoCards";

export const Video = () => {
  const [dataList, setDataList] = useState([]);
  const [filterDataList, setFilterDataList] = useState([]);
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [orderBy, setOrderBy] = useState("");

  useEffect(() => {
    fetch("https://public.connectnow.org.uk/applicant-test/")
      .then((resp) => resp.json())
      .then((response) => {
        setDataList(response);
        setFilterDataList(response);
      })
      .catch((err) => console.log("err"));
  }, []);
  const onChangeInputHandler = (e, type) => {
    const value = e.target.value;
    switch (type) {
      case "name":
        {
          setName(value);
        }
        break;
      case "score":
        {
          setScore(value);
        }
        break;
      case "order":
        {
          setOrderBy(value);
        }
        break;
    }
  };
  // console.log(122, dataList);
  const onSubmitHandler = () => {
    const temp = [...dataList];
    if (!name && !score) {
      setFilterDataList(dataList);
    } else {
      if (name && !score) {
        setFilterDataList(
          temp.filter((item, i) =>
            item.name?.toLowerCase()?.includes(name.toLowerCase())
          )
        );
      } else if (score && !name) {
        setFilterDataList(
          temp.filter(
            (item, i) =>
              Math.floor(parseFloat(item?.rating).toFixed(1) / 10) >=
              parseFloat(score)
          )
        );
      } else if (score && name) {
        setFilterDataList(
          temp.filter(
            (item, i) =>
              item.name?.toLowerCase()?.includes(name.toLowerCase()) &&
              Math.floor(parseFloat(item?.rating).toFixed(1) / 10) >=
                parseFloat(score)
          )
        );
      }
    }
  };

  return (
    <div className="videoWrapper">
      <div className="filterContainer">
        <p className="heading">Filter Results</p>
        <div className="inputContainer">
          <label>Name (contains)</label>
          <input
            onChange={(e) => onChangeInputHandler(e, "name")}
            value={name}
          ></input>
        </div>
        <div className="inputContainer">
          <label>Minimum Score</label>
          <input
            placeholder="1-10"
            type="number"
            onChange={(e) => onChangeInputHandler(e, "score")}
            value={score}
          ></input>
        </div>
        <div className="inputContainer">
          <label>Order By</label>
          <div>
            <select
              onChange={(e) => onChangeInputHandler(e, "order")}
              value={orderBy}
            >
              <option>Order By</option>
              <option>Release Date</option>
              <option>Score</option>
              <option>Name</option>
            </select>
          </div>
        </div>
        <div className="buttonContainer">
          <button onClick={onSubmitHandler}>Submit</button>
          <button>Clear</button>
        </div>
      </div>

      <div className="gamesContainer">
        {filterDataList.map((el, i) => (
          <div key={i}>
            <VideoCards item={el} />
          </div>
        ))}
      </div>
    </div>
  );
};
