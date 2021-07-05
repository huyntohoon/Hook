import "./styles.css";
import React, { useState, useEffect } from "react";

const useScroll = () => {
  // useScroll은 매개변수없이 리턴하는 함수
  const [state, setState] = useState({
    // useState를 통해서 x,y값을 사용함
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    // onScroll은 함수로서 useEfeect에 사용됨
    setState({ y: window.scrollY, x: window.screenX });
  };
  useEffect(() => {
    // componentDidMount
    window.addEventListener("scroll", onScroll);
    // if scroll => used => onScroll execute
    return () => window.removeEventListener("scroll", onScroll);
    // componentWillUnMount
  }, []);
  return state;
  // state의 현재 상태 리턴
};
export default function App() {
  const { y } = useScroll();
  // y 값는 useScroll를 통해 항시 변경
  return (
    <div className="App" style={{ height: " 1000px" }}>
      <h1 style={{ position: "fixed", color: y > 200 ? "red" : "blue" }}>
        Hello CodeSandbox
      </h1>
    </div>
  );
}
