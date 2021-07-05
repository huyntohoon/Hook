import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

const useNotification = (title, option) => {
  if (!("Notification" in window)) {
      //Notification이 존재여부
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
        //Notification의 허락이 없다면
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, option);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, option);
    }
  };
  return fireNotif;
};
export default function App() {
  const tiggerNotif = useNotification("Click Button", {
    body: "Click Again!!"
  });
  return (
    <div className="App" style={{ height: "1000px" }}>
      <button onClick="{tiggerNotif}">hello</button>
    </div>
  );
}
/* 진행 순서
button Click => tiggerNotif 함수 실행 => 
                tiggerNotif 함수는 useNotification 함수의 리턴 함수이며
                "Click Button"이라는 title, Click Again이라는 option을 매개변수로 실행된다.
                useNotification은 window의 Notification의 설정에 따라 행동한다.
