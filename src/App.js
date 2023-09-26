import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="font-bold text-center underline">
      Expense Tracker
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
