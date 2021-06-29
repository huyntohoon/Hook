import "./styles.css";
import React, { useState, useEffect } from "react";

const useConfrim = (message = "", callback) => {
  // useConfrim함수는 string이라는 message와 callback을 매개변수로 가진다.
  const confirmAction = () => {
    // confrimAction은 함수다.
    if (confirm(message)) {
      // browser가 confirm함수를 확인한다.
      // 확인 => true, 취소 => false
      callback();
      // callback execute
    }
  };
  return confirmAction;
  // execute confirmAction
};

export default function App() {
  const deleteWorld = () => console.log("D T W");
  // create deleteWorld function
  const confrimDelete = useConfrim("A Y S?", deleteWorld);
  // create confrim 객체 on useConfrim
  return (
    <div className="App">
      <button onClick={confrimDelete}>D T W</button>
    </div>
  );
  // onClick이 true => confrimDelete(useConfrim) 실행
}
