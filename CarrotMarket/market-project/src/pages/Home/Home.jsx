import styled from 'styled-components';
import HomeItems from "./components/HomeItems"

const Home = () => {
  return (
    <>
    <Banner>
      <img src="/Banner.png" alt="Banner" className='="main-banner' />
    </Banner>
    <MarketList>
      <MarketListTitle><h1>중고거래 인기매물</h1></MarketListTitle>
      <HomeItems />
      <HomeItems />
      <HomeItems />
      <HomeItems />
    </MarketList>

    </>
  )
}

export default Home

const Banner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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

