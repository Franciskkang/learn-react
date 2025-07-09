import React, { useState } from "react";

const TodoList = () => {
  //LOGIC
  const initialList = [
    {
      id: 1,
      text: "RE이론",
    },
    {
      id: 2,
      text: "React실습",
    },
    {
      id: 3,
      text: "React컴포넌트학습",
    },
    {
      id: 4,
      text: "React JSX 규칙 학습",
    },
    {
      id: 5,
      text: "RR학습",
    },
  ];
  const [list, setList] = useState(initialList);

  const handleAdd = () => {
    const newItem = {
      id: list.length + 1,
      text: "listlendering",
    };
    //spread syntax
    const resultList = [...list, newItem];
    setList(resultList);
  };
  //view
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.item}>(item.text)</li>
        ))}

        {/* <ls>React이름</ls>
        <ls>React실습</ls>
        <ls>React컴포넌트학습</ls>
        <ls>React JSX 규칙 학습</ls>
        <ls>RR학습</ls> */}
      </ul>
      <button type="button" onClick={handleAdd}>
        아이템추가
      </button>
    </div>
  );
};

export default TodoList;
