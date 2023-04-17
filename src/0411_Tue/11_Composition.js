// 리액트를 사용하기 위해 필요한 모듈을 불러오는 코드
import React from "react";

function Heading(props) {
    return <h1>{props.text}</h1>
}

function Paragraph(props) {
    return <p>{props.text}</p>
}

// export default function Section(props) {
const Section = props => {
    return (
        <>
            <Heading text={props.title}/>
            <Paragraph text={props.content}/>
        </>
    );
}

// 외부에서 사용할 수 있도록 내보내기
export default Section; 
