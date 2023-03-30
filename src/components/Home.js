import Todo from "./Todo";

export default function Home({ account, setLogged, setAccount }) {
  const doLogout = () => {
    setLogged(false);
    setAccount({});
  };

  return (
    <>
      <div className="menu">
        <div>
          Hello user: <span>{account.name}</span>
        </div>
        <div onClick={doLogout} style={{ cursor: "pointer" }}>
          Logout
        </div>
      </div>
      <Todo accountId={account.id}></Todo>
    </>
  );
}
