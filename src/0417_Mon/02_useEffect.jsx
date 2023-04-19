import { useState, useEffect } from "react";

const UseEffectCnt = () => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return(
        <>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </>
    );
}

export default UseEffectCnt;

// rendering되고 난 뒤에 무엇을 할것인지? -> useEffect
// useState으로 UI의 숫자가 변경되면, useEffect가 그 다음 동작으로 title을 변경
