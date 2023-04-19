// React functional component에서 life cycle method를 대체하는 React Hook 중 하나 (필수 사용 Hook)
// useEffec는 component가 렌더링 될 때 마다 특정 동작을 수행 하거나, 특정 상태가 업데이트 될 때 마다 동작을 수행
// 첫번째 인수로 콜백 함수를 받고, 이 콜백 함수는 component가 마운트 되거나 언마운트 될 때,
// 그리고 의존성 배열에 전달된 상태가 변경 될 때 마다 실행

import { useState, useEffect } from "react";

const UseEffectInfo = () => {
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    useEffect(() => {
        console.log('렌더링이 완료 되었습니다.');
        console.log(name, nickName)
    }, []);
    // 콜백함수, 의존성 배열

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickName = e => {
        setNickName(e.target.value);
    }

    return(
        <>
            <div>
                <input type="text" value={name} onChange={onChangeName} />
                <input type="text" value={nickName} onChange={onChangeNickName} />
            </div>
            <div>
                <p>이름 : {name}</p>
                <p>별명 : {nickName}</p>
            </div>
        </>
    );
}

export default UseEffectInfo;