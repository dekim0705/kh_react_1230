import { useState, useEffect } from "react";

const UseEffectClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect (() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        // Unmount되면 interval을 해제
        return() => clearInterval(interval);
    }, [])
    return(
        <>
            <h1>현재 시간 : </h1>
            <h1>{time.toLocaleTimeString()}</h1>
        </>
    );
}

export default UseEffectClock;


// setInterval -> 일정한 시간 간격으로 반복해서 특정 작업을 수행할 수 있게 해줌
//                첫 번재 매개변수로 실행할 함수(콜백 함수)와, 두 번재 매개변수로 몇 밀리초간격으로 실행할 지를 받음
//                (setTime을 1초마다 실행)
//                반복작업을 중지하기 위해 clearInterval함수 사용할 수 있음. 해당 함수는 setInterval함수가 반환한 값을
//                매개변수로 받아 해당 반복 작업을 중지