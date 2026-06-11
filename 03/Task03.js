import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentTime } from "../src/store/actions";

const Task03 = () => {
  const time = useSelector(({ time = null }) => time);
  const dispatch = useDispatch();

  return (
    <section>
      <h1>Task 3</h1>
      <div>
        <time>{time ? time.toLocaleTimeString() : "00:00:00"}</time>
        <button onClick={() => dispatch(getCurrentTime())}>
          get current time
        </button>
      </div>
    </section>
  );
};

export default Task03;
