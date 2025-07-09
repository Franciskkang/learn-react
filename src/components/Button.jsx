import React from "react";

const Button = ({ link, text, onClick }) => {
  const handleClick = () => {
    console.log("Click");
    onClick(text);
  };

  //view

  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
