import React, { useState } from "react";

const Counter = ({ step }) => {
  const [countState, setCountState] = useState(0);

  const person = {
    name: "kdkamg",
    mbti: "ISTJ",
  };

  const personName = person.name;
  const personMBTI = person.mbti;

  const { name, mbti } = person;
  console.log("🚀 ~ Counter ~ mbti:", mbti);
  console.log("🚀 ~ Counter ~ name:", name);

  //배열로된 구조분해 할당
  const animals = ["개", "고양이", "앵무새"];
  //각각의 값들을 구조분해할당으로 뽑아와서 콘솔에 출력
  const { animalsdog, animalscat, animalsparrot } = animals;
  console.log("🚀 ~ Counter ~ animalsparrot:", animalsparrot);
  console.log("🚀 ~ Counter ~ animalscat:", animalscat);
  console.log("🚀 ~ Counter ~ animalsdog:", animalsdog);

  // const userStep = () => {
  // const number = prompt("대화창에표시될txt 숫자 몇칸씩 증가시킬지");
  // console.log("🚀 ~ userStep ~ number:", number);
  // };

  const handleIncreases = () => {
    console.log(`+${step}`);
    setCountState(countState + step);
  };

  const handleDecreases = () => {
    setCountState((prev) => prev - step);
    console.log(`-${step}`);
  };

  //view
  return (
    <div>
      <h1>Counter</h1>
      {/* <div> */}
      {/* <button type="button" onClick={userStep}> */}
      {/* 간격선택 */}
      {/* </button> */}
      {/* </div> */}
      <div>{countState}</div>
      <div>
        <button type="button" onClick={handleIncreases}>
          +{step}
        </button>
        <button type="button" onClick={handleDecreases}>
          -{step}
        </button>
      </div>
    </div>
  );
};

export default Counter;
