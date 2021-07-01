import "./styles.css";
import React, { useState, useEffect } from "react";

const usePreventLeave = () => {
  // usePrevnetLeave는 함수 두 개를 리턴하는 함수이다.
  const listner = (event) => {
    // listner는 event를 매개변수로 받는 함수이다.
    event.preventDefalut();
    // event를 막는다. 멈춤선언
    event.returnValue = "";
    // event.preventDafault를 지원하지 않는 브라우저가 존재하기 때문에 같이 쓴다.
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listner);
  // enablePrevent라는 함수는 beforeunload를 capture한다.
  // beforeunload = 윈도우가 닫히기 전을 말한다.
  // 또한 listner라는 함수를 함께 실행하는데, 이는 브라우저의 위에 선언한 함수이다.
  const disenablePrevemt = () =>
    window.removeEventListener("beforeunload", listner);
  // 위에서 추가할 event를 삭제해준다.
  return { enablePrevent, disenablePrevemt };
  // 위에 선언한 두 함수를 리턴해준다.
};
export default function App() {
  const { enablePrevent, disenablePrevemt } = usePreventLeave();
  // 위에서 선언한 usePreventLeave를 실행하여 두 함수를 리턴 받는다.
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disenablePrevemt}>UnProtect</button>
    </div>
  );
}
