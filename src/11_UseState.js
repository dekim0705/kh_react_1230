import React, {useState} from "react";

// useState : React Hook중 하나, 함수형 컴포넌트에서 상태를 관리할 수 있음
//          : 상태가 변경되면 화면 렌더링

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickenter = () => setMessage("Hi!");
    const onClickLeave = () => setMessage("Bye!");
    const [val, setColor] = useState('black');

    return(
        <>
        <button onClick ={onClickenter}>Enter</button>
        <button onClick ={onClickLeave}>Leave</button>
        <h1 style={{color: val}}>{message}</h1>
        <button style={{color:'red'}} onClick ={()=>setColor('red')}>Red</button>
        <button style={{color:'green'}} onClick ={()=>setColor('green')}>Green</button>
        <button style={{color:'blue'}} onClick ={()=>setColor('blue')}>Blue</button>
        </>
    );
}

export default Say;

// when useState value changes, it renders