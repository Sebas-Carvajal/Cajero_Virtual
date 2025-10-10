import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home"
import CreateAccount from "./Pages/Account/CreateAccount";
import CreateCard from "./Pages/Card/CreateCard"
import ConfirmationAccount from "./Pages/Account/ConfirmationAccount";
import ConfirmationCard from "./Pages/Card/ConfirmationCard"
import AccountFunction from "./Pages/Account/AccountFunction";
import CardFunction from "./Pages/Card/CardFunction";
import Withdraw from "./Pages/Account/Withdraw";
import Transfer from "./Pages/Account/Transfer";
import Balance from "./Pages/Account/Balance";
import Deposit from "./Pages/Account/Deposit";
import PayCard from "./Pages/Card/PayCard";
import CupoCard from "./Pages/Card/CupoCard";

function App() {
  return (
    <BrowserRouter basename="/Cajero_Virtual">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/AccountFunction" element={<AccountFunction />} />
        <Route path="/AccountFunction/Withdraw" element={<Withdraw />} />
        <Route path="/AccountFunction/Transfer" element={<Transfer />} />
        <Route path="/AccountFunction/Balance" element={<Balance />} />
        <Route path="/AccountFunction/Deposit" element={<Deposit />} />
        <Route path="/ConfirmationAccount" element={<ConfirmationAccount />} />


        <Route path="/ConfirmationCard" element={<ConfirmationCard />} />
        <Route path="/CardFunction" element={<CardFunction />} />
        <Route path="/CardFunction/Withdraw" element={<Withdraw />} />
        <Route path="/CardFunction/Transfer" element={<Transfer />} />

        <Route path="/CardFunction/PayCard" element={<PayCard />} />
        <Route path="/CardFunction/CupoCard" element={<CupoCard />} />
        <Route path="/ConfirmationAccount" element={<ConfirmationAccount />} />
        <Route path="/CreateCard" element={<CreateCard />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
