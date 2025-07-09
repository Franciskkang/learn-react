import React from "react";
import Button from "./Button";

const Greeting = ({ userName }) => {
  //logic
  //const userName = "kdkang";
  const textClass = "text-red";

  //basic style
  //camel case: basicStyle
  // pascal: BasicStyle
  // snake: basic-style

  //view
  return (
    <div style={{ border: "1px solid blue" }}>
      <h1 className={`greeting-title ${textClass}`}>안녕하 {userName}님!</h1>
      <p>오늘도시원한하루보내세욤</p>
      <Button link={"https://www.naver.com/"}></Button>
      <Button link={"https://www.google.com/"}></Button>
    </div>
  );
};
export default Greeting;
