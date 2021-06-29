import "./styles.css";
import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  //useTitle이라는 함수는 initalTitle이라는 매개변수를 가진다.
  const [title, setTitle] = useState(initialTitle);
  //useState는 initialTitle를 value로 가지는 배열을 생성하고 리턴한다.
  //이 배열은 [0], [1]으로 참조할 수 있으나
  //배열 분리 구조를 가지고 있어서 [0], [1]이 아닌 title, setTitle이라는 이름을 가진 배열을 리턴한다.
  const updateTitle = () => {
    //updateTitle은 함수이다.
    const htmlTitle = document.querySelector("title");
    //htmlTitle은 component이며 querySelector로 title을 가져온다.
    htmlTitle.innerText = title;
    //innerText로 Title을 update한다.
  };
  useEffect(updateTitle, [title]);
  //[title] => title이 변경되면 updateTitle을 실행한다.
  return setTitle;
};

export default function App() {
  const titleUpdater = useTitle("Loading...");
  //변수의 형태를 가지고 있지만 titleUpdater로 함수를 호출해야한다.
  //이런 형태는 생성자와 비슷한 것 같아
  //함수를 통해서 객체를 하나 생성하고
  //그 객체를 이용해서 한 App에서 사용한다.
  console.log(titleUpdater);
  setTimeout(() => titleUpdater("Home"), 3000);
  return (
    <div>
      <h1>Hello !</h1>
    </div>
  );
}
