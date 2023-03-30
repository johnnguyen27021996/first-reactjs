import Login from "./Login";
import Home from "./Home";
import { useState } from "react";
import { useEffect } from "react";

const Main = () => {
  const logging = localStorage.getItem("logged")
    ? localStorage.getItem("logged")
    : false;
  const accounting = localStorage.getItem("account")
    ? JSON.parse(localStorage.getItem("account"))
    : {};
  const [accounts, setAccounts] = useState([]);
  const [logged, setLogged] = useState(logging);
  const [account, setAccount] = useState(accounting);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setAccounts(data);
      });
  }, []);

  return (
    <>
      {!logged && (
        <Login
          accounts={accounts}
          setLogged={setLogged}
          setAccount={setAccount}
        ></Login>
      )}
      {logged && (
        <Home
          account={account}
          setLogged={setLogged}
          setAccount={setAccount}
        ></Home>
      )}
    </>
  );
};

export default Main;
