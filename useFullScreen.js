import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

const useFullScreen = (callback) => {
  // useFullScreen은 callback이라는 매개변수(함수)를 받고 배열을 return하는 함수이다.
  const element = useRef();
  // element => useRef를 통해 component를 가져온다.
  // 가져오는 component => image 파일의 element이다.
  const triggerFull = () => {
    // truggerFull 함수는 element가 존재할 때 실행된다.
    // requestFullscreen => 해당 element + 자손을 Fullscreen으로 표시한다.
    if (element.current) {
      element.current.requestFullscreen();
      // FullScreen으로 실행하고 callback 함수에게 true를 보내며
      // 콘솔에 Fullscreen임을 알린다.
      if (callback && typeof onFulls === "function") {
        callback(true);
      }
    }
  };
  return { element, triggerFull };
};
export default function App() {
  const onFulls = (isFull) => {
    // 사용자에게 현재 상태를 알려주기 위해서 함수를 실행한다.
    console.log(isFull ? "W A F" : "W A S");
  };
  const { element, triggerFull } = useFullScreen(onFulls);
  // useFullScreen의 객체를 생성한다.
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <button onClick={triggerFull}>FullScreen</button>
      </div>
    </div>
  );
}
