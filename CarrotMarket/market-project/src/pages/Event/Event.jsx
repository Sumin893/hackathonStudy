const button = () => {
  return (
    <button onClick={() => alert("버튼 클릭했네요?")}>Button</button>
  )
}

//    <button onClick={alert("버튼 클릭했네요?")}>Button</button>
// 위에 처럼 하면 버튼을 클릭하지 않았는데도 alert 저게 뜸. ==>>>화살표 함수를 사용해야함!!!!


export default button