import styled from "styled-components"

function NextButton({buttonitems}){
  console.log(buttonitems);
  return (
    <StyledButton>
      {buttonitems}
    </StyledButton>
    
  )
}
export default NextButton

const StyledButton = styled.button`
width: auto;
margin: 0 5px;
padding: 0 10px;
height: 40px;
border: solid 1px #dcdcdc;
border-radius: 20px;
cursor: pointer;
background-color: white;

  &:hover {
    background-color: #E2E2E2;
    color: black;
  }

`