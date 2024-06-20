import styled from 'styled-components';
import mainbanner from "/Banner.png";

const Banner = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0px 0px 40px 0px;
  overflow-clip-margin: content-box;
  overflow: clip;

`

const MarketList = styled.div`
display: flex; 
justify-content: center;
`

const MarketListTitle = styled.div`
margin: 0px;

.h1 {
margin: 0px;
}
`

const MarketListItems = styled.div`

`
// const Card = (props) => {
//   return (
//     <div className='MarketListItems'>
//       <img className="products" src="item.png" alt="Product" />
//       <h4 className="products name">{props.name}</h4>
//       <p className="products price">{props.price}</p>
//       <p className="products address">{props.address}</p>
//       <p className="products about">{props.about}</p>
//     </div>
//   );
// };


const Home = () => {
  return (
    <>
    <Banner>
      <img src={mainbanner} alt="Banner" className='="main-banner' />
    </Banner>

    <MarketList>
      <MarketListTitle><h1>중고거래 인기매물</h1></MarketListTitle>
      {/* <MarketListItems>
        <Card 
          name= "상품명"
          price= "10,000원"
          address= "서울시 강남구"
          about= "관심 15 · 채팅 85"
        />
      </MarketListItems> */}
    </MarketList>

    </>
  )
}

export default Home

