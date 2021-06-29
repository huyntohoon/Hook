import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  // useClick 함수는 onClick이라는 매개별수를 가진다.
  const element = useRef(); // element = catched component
  // ref를 이용해서 element와 component를 연결시켜준다.
  console.log(element);
  useEffect(() => {
    if (element.current) {
      // componentDidMount, componentDidUpdate
      console.log("create !");
      element.current.addEventListener("click", onClick);
    }
    return () => {
      // componentWillunMount
      if (element.current) {
        console.log("boom !");
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};
export default function App() {
  const sayHello = () => {
    console.log("Hello");
  };
  const title = useClick(sayHello); // title = useClick 내 useRef 사용으로
  console.log(title);
  return <h1 ref={title}>Hello</h1>; // 해당 component를 catch한다.
}
