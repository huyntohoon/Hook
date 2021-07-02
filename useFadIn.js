import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  // useFadeIn은 duration defalut value 1, delay defalut value = 0
  // 을 매개변수로 가진 함수이다.
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  // useRef로 element라고 선언된 컴포넌트의 reference와 같은 이름의
  // 구성요소를 가져온다.
  useEffect(() => {
    // useEffect(function, deps)
    // function =>will execute function
    // deps => array form, want to inspect value
    // if deps change => function will execute
    // componentDidMount
    if (element.current) {
      // element => exsit
      const { current } = element;
      // element => component, fix to detail value
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []); // [] => first component mount => once time to want execute
  return { ref: element, style: { opacity: 0 } };
  // return this value => want to give default value.
};

export default function App() {
  const fadeInH1 = useFadeIn(22, 1);
  const fadeInp = useFadeIn(2, 1);
  return (
    <div className="App">
      <h1 {...fadeInH1}>hello</h1>
      <p {...fadeInp}>bye</p>
    </div>
  );
}
