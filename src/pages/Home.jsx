import Move from "../components/Move";
import TodoList from "../components/TodoList";

const Home = () => {
  //logic
  //전체에 적용되게 state 구문 기본값은 빈 string
  // const [step, setStep] = useState(0);

  // const userStep = () => {
  //   const userNum = prompt("숫자의 간격을 입력해주소");
  //   setStep(Number(userNum));
  // };

  // const [userName, setUsername] = useState("");
  // useEffect(() => {
  //   //컴포넌트가 생성됐을때 딱 한번실행 (APPJS니까 처음 진입시)
  //   //사용자 이름 입력받기
  //   const name = prompt("what's user's name?");
  //   setUsername(name);
  // }, []);

  //입력받은 사용자 이름으로 Greeting 컴포넌트 수정하기

  //패아자3개 home about contact
  // view (HTML under below)

  //view
  return (
    <div>
      Home
      <Move />
      <TodoList />
      {/* <Greeting /> */}
      {/* <Greeting userName={userName} />
      <Counter step={3} />
      <Counter step={10} />
      <Counter step={step} />
      <div>
        <button type="button" onClick={userStep}>
          간격선택
        </button>
      </div>
      <Counter /> */}
      {/* 카드컴포넌트 */}
      {/* <div className="card-wrap"> */}
      {/* <Card /> */}
      {/* <Card /> */}
      {/* <Card /> */}
      {/* <Card /> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
