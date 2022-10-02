// import logo from './logo.svg';
import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { id: "e1", title: "monitor", amount: 7750, date: new Date(2022, 10, 2) },
    { id: "e2", title: "keyboard", amount: 850, date: new Date(2022, 10, 3) },
    { id: "e3", title: "hdmi hub", amount: 2600, date: new Date(2022, 10, 4) },
    { id: "e4", title: "headphone", amount: 550, date: new Date(2022, 10, 5) },
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
