import Card from "./components/Card";
import Greeting from "./components/Greeting";
function App() {
  return (
    <div className="wrap">
      <Greeting />
      {/* 카드컴포넌트 */}
      <div className="card-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
