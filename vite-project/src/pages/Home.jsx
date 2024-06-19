// import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #ffe4c4;
  width: 100%;
  height: 50vh;
`;
const StyledLine = styled.div`
  font-size: 30px;
  color: #f08080;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {

  return (
    <>
      <Wrapper>
        <StyledLine>Hello World!</StyledLine>
      </Wrapper>
    </>
  )
}

export default Home;
