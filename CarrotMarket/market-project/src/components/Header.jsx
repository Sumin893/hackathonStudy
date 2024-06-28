import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
  <NavContents>
    <Nav>
      <LeftSection>
        <Logo><img src="/logo.png" alt="logo" /></Logo>
        <NavbarList>
          <ul>
            <li><StyledLink to= "/fleamarket">중고거래</StyledLink></li>
            <li><StyledLink to= "/nearby-stores">동네업체</StyledLink></li>
            <li><StyledLink to = "/event">이벤트</StyledLink></li>
            <li>부동산</li>
            <li>중고차 직거래</li>
          </ul>
        </NavbarList>
      </LeftSection>
      <RightSection>
        <Input placeholder = "물품이나 동네를 검색해보세요" />
        <Button><a>채팅하기</a></Button>
      </RightSection>
    </Nav>
  </NavContents>
  <Outlet />
  </>
  );
};

export default Header


const NavContents = styled.div`
background-color: white;
position: sticky;
padding: 5px 0px 5px 0px;
display: flex;
justify-content: center;
`

const Nav = styled.div`
display: flex;
width: 78%;
justify-content: space-between;
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
margin-right: 20px;
}
`

const NavbarList = styled.div`

ul{
  display: flex;
}

li {
  margin-right: 22px;
  list-style-type: none;
  font-weight: 1000;
  font-size: 18px;
  color: #696969;
  text-decoration: none;
}
`
const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`
const Input = styled.input`
width: 250px;
height: 40px;
background-color: #f2f3f6;
border : 0px solid;
border-radius : 10px;
margin-right: 20px;
padding-left:20px;
`
//글씨 살짝 오른쪽으로 하는 거!

const Button = styled.button`
width: 70px;
border: solid 1px #dcdcdc;
border-radius: 5px;
cursor: pointer;
background-color: white;
padding: 10px 5px;

a {
  color: #212124;
  font-weight: 700;
}
`
//font-weight 안먹음!
