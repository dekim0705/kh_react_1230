import React from "react";

// default Props : props의 값을 지정하지 않는 경우, 기본값 설정
// children : 태그 사이의 내용을 전달 받아 보여줌
// 구조분해(비구조화할당) : 배열이나 객체의 속성 혹은 그 값을 해체하여 해당 값을 변수에 담아 표현하는 JS식 표현

export const MyComponent = props => {
    const {name, children} = props;
    return (
        <>
            <p>Hi, My name is {props.name}.</p>
            <p>My daughter's name is {props.children}.</p>
        </>
    );
}
MyComponent.defaultProps = {
    name : "[default name/MyComponent]",
    children : "[default]"
}

const MyComponent1 = ({name, children}) => {
    return (
        <>
            <p>Hi, My name is {name}.</p>
            <p>My daughter's name is {children}.</p>
        </>
    );
}
MyComponent1.defaultProps = {
    name : "[default name/MyComponent1]",
    children : "[default1]"
}

export default MyComponent1;