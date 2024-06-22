import styled from 'styled-components';
import HomeItems from "./components/HomeItems"

const Home = () => {
  const testArr = [{
    product:"제습기",price:"5,000",address:"서울 중구 약수동",chat:"관심 16 · 채팅 51"
},{
  product:"청바지",price:"7,000",address:"인천 부평구 부평동",chat:"관심 41 · 채팅 70"
},{
  product:"조립형 창고",price:"50,000",address:"경기도 이천시 대월면",chat:"관심27 · 채팅 13"
},{
  product:"안방그릴 풀세트 1회 사용",price:"30,000",address:"광주 광산구 신가동",chat:"관심 69 · 채팅 73"
},{
  product:"55인치 TV 판매합니다",price:"40,000",address:"인천 미추홀구 주안동",chat:"관심 40 · 채팅 58"
},{
  product:"국내산 100% 꿀",price:"10,000",address:"인천 서구 당하동",chat:"관심 5 · 채팅 15"
},{
  product:"i mac 싸게 팝니다",price:"100,000",address:"서울 서대문구 대현동",chat:"관심 38 · 채팅 38"
}];
  
  return (
    <>
    <Banner>
      <img src="/Banner.png" alt="Banner" className='="main-banner' />
    </Banner>
    <MarketList>
      <MarketListTitle><h1>중고거래 인기매물</h1></MarketListTitle>
      <MarketListItems>
      {
        testArr.map((val,idx)=> <HomeItems key={idx} itembox={val}/>)
      }
      </MarketListItems>
    </MarketList>
    {/* <Outlet /> */}
    </>
  )
}

export default Home

const Banner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 315px;
  margin-bottom: 40px; 
`

const MarketList = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const MarketListTitle = styled.div`
margin-bottom: 30px;
`

const MarketListItems = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
column-gap: 40px;
row-gap: 10px;
@media screen and (max-width: 700px){
  grid-template-columns: repeat(2, 1fr);
  }
`

