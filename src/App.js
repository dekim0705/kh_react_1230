// import logo from './logo.svg';
import './App.css';
// import Section from './11_Composition';
// import {MyComponent} from './11_Children_DefProp';
// import MyComponent1 from './11_Children_DefProp';
// import Person from './11_Person';
// import Say from './11_UseState';
// import Clock from './11_Clock';
// import EventHandler from './12_EventHandler';
// import EventHandler2 from './12_EventHandler';
// import FruitSelect from './12_SelectBox';
// import RadioButton from './12_RadioButton';
// import TableMap from './12_TableMap';
import CreateRef from './12_Ref';

const App = () => {
  return(
    <>
      <CreateRef />
    </>
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

/*
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
*/

// function App() {
//   const name = "React";

//   const nameForSytle = "React";
//   // 리액트에서 DOM요소에 스타일을 적용할 때는 객체 형태로 넣어야 함 (코딩영역)
//   // 스타일 이름에 하이픈(-)이 포함되어 있으면 카멜표기법으로 변경
//   const style = { // object literal > property(key : value)
//     backgroundColor : "black",
//     color : "salmon",
//     fontSize : "2em"
//   };

//   // return문 안에는 조건부연산자(if문 대신)와  AND연산자 사용 가능
//   return (
//     // DOM에 붙이기 위해서는 요소가 1개여야함 = 요소들 하나로 묶기 = 부모태그로 감싸기 : <div>, <>
//     <> 
//       {/* 삼항연산자를 사용해서 참인 조건과 거짓인 조건에 대해 렌더링 */}
// 			{name === "React" ? (<h1>React : true</h1>) : (<h1>React : false</h1>)}
//       {/* AND연산자를 이용한 조건부 렌더링 */}
//       {name === "React" && <h1>Updating the react screen...</h1>}
//       {nameForSytle ==="React" && <h1 style={style}>Updating the react screen...</h1>}
//     </>
//   );
// }

/*
// 4/11/Tue (functional component)
function WelcomeProps(prop) { // component name in CAPITAL letters
    return (
      <>
        <h1>User #{prop.number}</h1>
        <p>Hi, {prop.name}!</p>
        <p>This is what reusing a component looks like. </p>
        <p style={{textAlign: 'center'}}>🩷</p>
      </>
    );
}
const App = () => { // Arrow Function
  const element1 = <WelcomeProps name="Meredith" number ="1" />
  const element2 = <WelcomeProps name="Christina" number ="2" />
  return (
    <>
      {element1}
      {element2}
      <WelcomeProps name="Izzie" number="3" />
      <WelcomeProps name="Alex" number="4" />
      <WelcomeProps name="George" number="5" />
      <hr></hr>
      <Section title="Section 1" content="This is the content for Section 1." />
      <Section title="Section 2" content="This is the content for Section 2." />
    </>
  );
}
*/

/*
const App = () => {
  let insideTag = "Zola";
  return (
    <>
      <h1>MyComponent</h1>
      <MyComponent />
      <MyComponent name="Meredith" />
      <MyComponent name="Meredith">{insideTag}</MyComponent>
      <hr></hr>
      <h1>MyComponent1</h1>
      <MyComponent1 />
      <MyComponent1 name="Meredith" />
      <MyComponent1 name="Meredith">{insideTag}</MyComponent1>
    </>
  );
}
*/

/*
// destructuring assignment + object literal + spread operator
const App = () => {
  const personData = {
    name : "Meredith",
    age : "30",
    gender : "F"
  };
  return (
    <Person {...personData}/>
  );
}
*/

/*
const App = () => {
  return(
    <>
      <Say />
      <Clock />
    </>
  );
}
*/

// 4 / 12 / Wed

/*
// 4/12/Wed
const App = () => {
  return(
    <>
      <EventHandler />
    </>
  );
}
*/

/*
const App = () => {
  return(
    <>
      <EventHandler2 />
    </>
  );
}
*/

/*
const App = () => {
  return(
    <>
      <h3>Select Box</h3>
      <FruitSelect />
      <br /><br /><hr />
      <h3>Radio Button</h3>
      <RadioButton />
    </>
  );
}
*/

/*
const App = () => {
  return(
    <>
      <TableMap />
    </>
  );
}
*/



