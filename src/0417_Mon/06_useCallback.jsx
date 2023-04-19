// useCallback : 렌더링 최적화를 위해 사용, 렌더링을 최적화 해야 할 상황에서 사용하며, 만들어놓은 함수를 재사용하는 방법
import { useState, useMemo, useCallback } from "react";

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

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // 처음 렌더링될 때 함수 생성

    const onInsert = useCallback(() => {
        // 현재 입력 받은 숫자를 기존의 리스트에 concat으로 추가 했으므로 새로운 배열이 생성됨 -> 불변성의 원칙)
        const nextList = list.concat(parseInt(number)); // 문자열이니까 타입변환
        setList(nextList);
        setNumber('');
    }, [number, list]); 

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
