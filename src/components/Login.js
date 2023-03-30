import { useState } from "react";

export default function Login({ accounts, setLogged, setAccount }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = (e) => {
    e.preventDefault();
    const user = accounts.filter((account) => account.username === username);
    if (user.length > 0 && password !== "") {
      setLogged(true);
      setAccount(user[0]);
      localStorage.setItem("logged", true);
      localStorage.setItem("account", JSON.stringify(user[0]));
    } else {
      setLogged(false);
      setAccount({});
      localStorage.setItem("logged", true);
      localStorage.setItem("account", JSON.stringify({}));
      alert("Login failed");
    }
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <form action="#">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={doLogin}>Login</button>
        </form>
        <ul>
          {accounts.map((account) => (
            <li key={account.id}>{account.username}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
