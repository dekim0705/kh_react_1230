// useMemo : React컴포넌트의 성능 최적화를 위해 사용 (이전에 계산된 값을 재사용할 수 있도록 해주는 Hook)
// React 컴포넌트에서 렌더링 하는 동안, 컴포넌트의 상태나 props가 변경되면 해당 컴포넌트와 하위 컴포넌트들이 다시 렌더링 되며,
// 이 때 불필요한 렌더링이 발생할 수 있으며 -> 성능 문제 야기 가능성

import { useState, useMemo } from "react";

// 일반적인 구현 방식 : 인풋 onChange마다 계속 getAverage함수 호출 함 -> 낭비
/*
const getAverage = numbers => {
    console.log("평균값 계산 중...");
    if(numbers.length === 0) return 0;
    // 배열의 각 요소를 순회하며 callback 함수의 실행 값을 누적하여 하나의 결과값을 반환
    const sum = numbers.reduce((a, b) => a + b)
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]); // 배열
    const [number, setNumber] = useState(''); // 문자열

    const onChange = e => {
        setNumber(e.target.value);
    }

    const onInsert = () => {
        // 현재 입력 받은 숫자를 기존의 리스트에 concat으로 추가 했으므로 새로운 배열이 생성됨 -> 불변성의 원칙)
        const nextList = list.concat(parseInt(number)); // 문자열이니까 타입변환
        setList(nextList);
        setNumber('');
    }
    

    return(
        <>
            <input type="text" value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
            <div>
                <b>평균값 : </b> {getAverage(list)}
            </div>
        </>
    );
}
*/

// useMemo 사용 : 값이 바뀌면 연산 실행, 값이 그대로면 이전 결과 다시 사용
const getAverage = numbers => {
    console.log("평균값 계산 중...");
    if(numbers.length === 0) return 0;
    // 배열의 각 요소를 순회하며 callback 함수의 실행 값을 누적하여 하나의 결과값을 반환
    const sum = numbers.reduce((a, b) => a + b)
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]); // 배열
    const [number, setNumber] = useState(''); // 문자열

    const onChange = e => {
        setNumber(e.target.value);
    }

    const onInsert = () => {
        // 현재 입력 받은 숫자를 기존의 리스트에 concat으로 추가 했으므로 새로운 배열이 생성됨 -> 불변성의 원칙)
        const nextList = list.concat(parseInt(number)); // 문자열이니까 타입변환
        setList(nextList);
        setNumber('');
    }

    const avg = useMemo(() => getAverage(list), [list]);
    // useMemo : memoization을 통해 연산결과 캐싱, 성능 최적화
    // 매개변수로 전달된 함수 getAverage실행하고, [list]값이 변경 될 때마다 함수 다시 실행
    

    return(
        <>
            <input type="text" value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
            <div>
                {/* <b>평균값 : </b> {getAverage(list)} */}
                <b>평균값: </b> {avg}
            </div>
        </>
    );
}


export default Average;



