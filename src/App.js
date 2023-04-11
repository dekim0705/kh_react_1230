// import logo from './logo.svg';
import './App.css';

function App() {

  const member ={
    name : "Meredith",
    job : "General Surgeon",
    position : "Chief",
    addr : "Seattle"
  };

  // eslint-disable-next-line
  function getGreeting(user) {
    // return (user) ? (<h1>Welcome, {member.name}.</h1>) : (<h1>Welcome, Visitor.</h1>)
    if(user) {
      return <h1>Welcome, {member.name}.</h1>
    }
    return <h1>Welcome, Visitor.</h1>
  };
  return (
    // in JSX, class keyword needs to be renamed as className
    // use of id is NOT recommended to increase the reusability
    <div className="App">
      <div>{getGreeting(true)}</div>
      <p className="title-name">Hi, I am {member.name}.</p>
      <p className="title-name">I am a {member.position} {member.job}.</p>
      <p className="title-name">I live in {member.addr}.</p>
    </div>
  );

}

export default App;
/*
// DEFAULT
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/