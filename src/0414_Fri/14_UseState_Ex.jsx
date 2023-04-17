import React, {useState} from "react";

// 연습문제
// - 이름, 직책, 회사명, 회사주소, 이메일, 전화번호를 입력 받아 명함 형태로 출력
// - 명함은 객체 리터럴로 관리
// - 입력값의 변경은 useState 사용
// - 제출 버튼을 만들어서 제출 누르면 명함 형태로 출력

// const NameCard = (props) => {
//   return(
//     <>
//       <h3>NAME CARD</h3>
//       <p>NAME     : {props.member.name}</p>
//       <p>POSITION : {props.member.position}</p>
//       <p>COMPANY  : {props.member.company}</p>
//       <p>ADDRESS  : {props.member.addr}</p>
//       <p>EMAIL    : {props.member.eMail}</p>
//       <p>PHONE#   : {props.member.phone}</p>
//     </>
//   )
// }

// 구조분해
const NameCard = ({member}) => {

  return(
    <>
      <h3>NAME CARD</h3>
      <p>NAME     : {member.name}</p>
      <p>POSITION : {member.position}</p>
      <p>COMPANY  : {member.company}</p>
      <p>ADDRESS  : {member.addr}</p>
      <p>EMAIL    : {member.eMail}</p>
      <p>PHONE#   : {member.phone}</p>
    </>
  )
}

const UserState = () => {
  const [member, setMember] = useState({name: '', position: '', company: '', addr: '', eMail: '', phone: ''}) // JS특성상 useState()에 값을 넣을 때 데이터 타입이 결정 됨 -> 현재 객체리터럴을 넣은 상태 -> 객체를 구조분해 해서 넣음
  const [submit, setSubmit] = useState(false); // 정보 입력 받은 후 버튼을 누르기 전까지는 출력이 되지 않도록
  const onChangeName = (e) => setMember({...member, name: e.target.value})// onChangeName == 이름이 바뀐다 == input창에 정보가 들어오는 것 / 전개연산자로 member를 펼쳐서 넣고 -> name에 입력된 정보를 넣기
  const onChangePos = (e) => setMember({...member, position: e.target.value})
  const onChangeComp = (e) => setMember({...member, company: e.target.value})
  const onChangeAddr = (e) => setMember({...member, addr: e.target.value})
  const onChangeMail = (e) => setMember({...member, eMail: e.target.value})
  const onChangePhone = (e) => setMember({...member, phone: e.target.value})
  
  const onSubmit = () => {
      setSubmit(true) // 값이 들어오면 플래그 변경
  }
    return(
      <>
        <h1>Member info</h1>
        <input type="text" placeholder="Full Name" value={member.name} onChange={onChangeName} />
        <br />
        <input type="text" placeholder="Position" value={member.position} onChange={onChangePos} />
        <br />
        <input type="text" placeholder="Company" value={member.company} onChange={onChangeComp} />
        <br />
        <input type="text" placeholder="Address" value={member.addr} onChange={onChangeAddr} />
        <br />
        <input type="text" placeholder="with @" value={member.eMail} onChange={onChangeMail} />
        <br />
        <input type="text" placeholder="wihtout -" value={member.phone} onChange={onChangePhone} />
        <br />
        <button onClick={onSubmit}>Sumbit</button>
        {submit && <NameCard member={member} />}
      </>
    )

}
export default UserState;