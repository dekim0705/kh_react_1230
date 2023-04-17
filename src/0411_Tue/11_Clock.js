import {useState} from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }
    // 1초마다 tick함수 부르기
    setInterval(tick, 1000);

    return (
        <>
            <h1>현재 시간을 표시 합니다.</h1>
            <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
        </>
    );
}
export default Clock;
