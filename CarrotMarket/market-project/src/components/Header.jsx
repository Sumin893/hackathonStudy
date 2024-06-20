import styled from 'styled-components';

const Nav = styled.div`
background-color: white;
position: fixed;
top: 0px;
width: 100%;
height: 70px;
z-index: 1000;
flex-grow: 1;
`

const WhiteBackground = styled.div`
desplay: flex;
height: auto;
padding: 12px 20px;
width: 100%;
`

const NavContents = styled.div`
display: flex;
justify-content: space-between;
aligh-items: center;
padding: 0px 20px;
`

const LeftSection = styled.div`
display: flex;
align-items: center;
`

const RightSection = styled.div`
display: flex;
align-items: center;
`

const Logo = styled.div`
img{
height: 50px;
width: 90px;
}
`

const NavbarList = styled.div`

ul{
  display: flex;
  padding: 0;
}

li {
  margin-right: 20px;
  list-style-type: none;
  font-weight: 1000;
  display: flex;
  flex: none;
}

.Highlight {
color: #ff8c00;
}
`

const Input = styled.input`
width: 250px;
height: 40px;
background-color: #d3d3d3;
border : 0px solid;
border-radius : 10px;
outline: none;
mragin-left: 20px;
margin-right: 10px;

`

const Button = styled.button`
width: 70px;
border: solid 1px #222;
border-radius: 10px;
text-align: center;
cursor: pointer;
background-color: white;
color: black;
padding: 10px 5px;

.a {
  color: #212124;
}
`




const Header = () => {
  return (
    <Nav>
      <WhiteBackground>
        <NavContents>
          <LeftSection>
            <Logo><img src="/logo.png" alt="logo" /></Logo>
            <NavbarList>
              <ul>
                <li className='Highlight'>중고거래</li>
                <li>동네업체</li>
                <li>알바</li>
                <li>부동산</li>
                <li>중고차 직거래</li>
              </ul>
            </NavbarList>
          </LeftSection>
          <RightSection>
            <Input placeholder = "물품이나 동네를 검색해보세요" />
            <Button><a>채팅하기</a></Button>
          </RightSection>
        </NavContents>
      </WhiteBackground>
    </Nav>
  );
};

export default Header
