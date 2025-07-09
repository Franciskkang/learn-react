import React from "react";

const Greeting = () => {
  //logic
  const userName = "kdkang";
  const textClass = "text-red";

  //view
  return (
    <div>
      <h1 classname={`greeting-title ${textClass}`}>안녕하 {userName}님!</h1>
      <p>오늘도시원한하루보내세욤</p>
    </div>
  );
};
export default Greeting;
