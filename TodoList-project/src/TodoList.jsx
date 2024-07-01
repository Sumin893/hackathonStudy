import styled from "styled-components"


const TodoList = () => {

  return (
    <>
      <Title>Todo List</Title>
      <TodoInsert>
        <input type="text" placeholder="할 일을 추가하세요"/>
        <button>추가</button>
      </TodoInsert>
    </>
  )
}


export default TodoList

const Title = styled.div`
  font-size: 60px;
  display: flex;
  justify-content: center;
  margin-top: 100px;

`
const TodoInsert = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  input {
    margin-right: 30px;
    background-color: #80f0a0;
    border-radius: 5px;
    border: none;
    width: 230px;
    height: 30px;
    font-size: 15px;
    text-align: center;
  }

  button {
    background-color: #24e71a;
    border-radius: 5px;
    border: none;
  }
`