// import logo from './logo.svg';
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

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
      <p>This is also visible</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
