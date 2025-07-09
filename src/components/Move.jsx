import React from "react";
import { Link } from "react-router-dom";

const Move = () => {
  const handlePageMove = () => {
    const history = () => {
      history("/contact");
    };
    //page move
  };
  return (
    <div>
      <Link to={"/about"}>About</Link>
      <button type="button" onClick={handlePageMove}></button>
    </div>
  );
};

export default Move;
