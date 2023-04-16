import React, { useState } from "react";

// useState()는 리액트에서 상태(state)를 관리하기 위해 제공되는 훅(hook) 중 하나
// 상태가 변경될 때마다 컴포넌트가 자동으로 다시 렌더링
// 배열 형태로 반환되며, 첫 번째 요소는 현재상태, 두 번째 요소는 상태를 변경하는 함수

const UseState = () => {
    const [value, setValue] = useState(0);

    return(
        <>
            <p>Clicked <b>{value}</b>times.</p>
            <button onClick={() => setValue(value + 1)}> +1 </button>
            <button onClick={() => setValue(value - 1)}> -1 </button>
        </>
    );
}
export default UseState;