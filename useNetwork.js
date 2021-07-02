import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

const useNetwork = (onChange) => {
  // useNetwork => onChange라는 매개변수로 가진다.
  const [status, setStatus] = useState(navigator.onLine);
  // navigator.online => boolean 리턴 값으로 status와 setStatus를 초기화한다.
  const handleChange = () => {
    // handleChange는 함수이며 onChange가 함수인 경우에만
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
      // onChange 자체를 불린함수를 매개변수로 실행한다.
      // 실행의 목적은 함수명 그대로 change이다.
      // onChange가 function이면 navegator.online으로 boolean함수를 리턴하고
      // onChange === onNetworkChange 함수이며 이는 console.log를 리턴한다.
    }
    setStatus(navigator.onLine);
    // handleChange가 실행되었을 때 무조건 일어난다.
    // setStatus => function to change state value.
  };
  useEffect(() => {
    // componentDidMount
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      // componentWillUnmount
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  // component first create once time execute.
  return status;
};

export default function App() {
  const onNetworkChange = (isOnline) => {
    // onNetworkChange => onChange function.
    console.log(isOnline ? "ON" : "OFF");
  };
  const online = useNetwork(onNetworkChange);
  // useNetwork return => boolean network state.
  return <h1>{online ? "ON" : "OFF"}</h1>;
}
