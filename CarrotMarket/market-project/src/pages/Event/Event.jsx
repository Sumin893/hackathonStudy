const button = () => {
  return (
    <>
    <button onClick={() => alert("버튼 클릭했네요?")}>Button</button>
    <input 
      type="text"
      onChange={(e)=>{console.log(e.target.value)}}>
    </input>
    </>
  )
}

//    <button onClick={alert("버튼 클릭했네요?")}>Button</button>
// 위에 처럼 하면 버튼을 클릭하지 않았는데도 alert 저게 뜸. ==>>>화살표 함수를 사용해야함!!!!

//button은 onClick, input은 onChange
//onChange: input의 텍스트가 바뀔 때마다 발생하는 이벤트, 이벤트가 발생하면 handleChange 함수가 작동하고, 
//이벤트 객체에 담긴 input값을 setState를 통해 새로운 state로 갱신.


export default button