import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

const useNotification = (title, option) => {
  if (!("Notification" in window)) {
      //Notification이 존재여부 => 브라우저가 알림에 대한 지원을 하지 않는다면
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
        //Notification의 허락을 이미 가지고 있는지 확인
        //Notification의 권한이 현재 없다면
      Notification.requestPermission().then((permission) = > {
        //알림 허락 확인 함수 => then 실행, permission 매개 변수로 실행
        if (permission === "granted") {
          // granted  == 허락이면, 실행
          new Notification(title, option);
        } else {
          // 불허 => return
          return;
        }
      });
    } else {
      //Notification의 허락을 이미 가지고 있음
      new Notification(title, option);
    }
  };
  // fireNotif 실행
  return fireNotif;
};
export default function App() {
  // tiggerNotif 라는 useNotification의 해당 매개변수를 가지는 객체 생성
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
