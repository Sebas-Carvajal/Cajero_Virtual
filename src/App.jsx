import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home"
import CreateAccount from "./Pages/CreateAccount";
import CreateCard from "./Pages/CreateCard"
import ConfirmationAccount from "./Pages/ConfirmationAccount";
import ConfirmationCard from "./Pages/ConfirmationCard"
import AccountFunction from "./Pages/AccountFunction";
import CardFunction from "./Pages/CardFunction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/CreateCard" element={<CreateCard />} />
        <Route path="/ConfirmationAccount" element={<ConfirmationAccount />} />
        <Route path="/ConfirmationCard" element={<ConfirmationCard />} />
        <Route path="/AccountFunction" element={<AccountFunction />} />
        <Route path="/CardFunction" element={<CardFunction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
