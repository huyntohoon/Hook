import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

const useBeforeLeave = (onBefore) => {
  //onbefore를 매개변수로 한 useBeforLeave 함수 선언
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    // event를 매개변수로 한 handle 함수 선언
    const { clientY } = event; // clinetY는 event를 value
    if (clientY < 0) {
      // clinetY => 마우스가 나간 y축의 값, y가 위로 올라가야 onBefore 실행
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  });
};

export default function App() {
  const begForLife = () => console.log("Please don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}
