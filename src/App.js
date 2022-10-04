import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Crud from "./crud";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Crud />} />
{<Route exact path="/update/:id" component={Update} />}
      </Routes>
    </div>
  );
}

export default App;
