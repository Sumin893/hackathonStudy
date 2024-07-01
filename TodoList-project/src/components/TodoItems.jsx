import styled from "styled-components";

const TodoItems = () => {

  return(
    <TodoItemList>
      <ul>
        <li>유투브 보기</li>
        <li>음악 듣기</li>
        <li>설거지 하기</li>
        <li>짐싸기</li>
      </ul>
    </TodoItemList>
  )
}

export default TodoItems

const TodoItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`


