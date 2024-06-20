import styled from 'styled-components';

const Items = () => {
  return(
    <HomeItems>
      <HomeItemsDetail>
        <div><img src="public\item.png" /></div>
        <div className= 'product'>아이폰 12 512기가</div>
        <div className = 'price'>600,000원</div>
        <div className= 'address'>서울시 종로구 혜화동</div>
        <div className= 'chat'>관심5 · 채팅 15</div>
        </HomeItemsDetail>
    </HomeItems>
  )
}

export default Items

const HomeItems = styled.div`
display: flex;


img{
border-radius: 10px;
margin-bottom: 10px;
}
`

const HomeItemsDetail = styled.div`
margin-bottom: 35px;

.product {
font-size: 17px;
margin-bottom: 5px;
}

.price {
font-size: 15px;
font-weight: 700;
margin-bottom: 3px;
}

.address {
font-size: 13px;
font-weight: 300;
margin-bottom: 3px;
}

.chat {
font-size: 12px;
color: gray;
}
`