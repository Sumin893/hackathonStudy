import styled from 'styled-components';

const Items = ({itembox}) => {
  console.log(itembox)
  //객체의 value접근
  //객체명.KEY
  console.log(itembox.title)
  return(
    <HomeItems>
      <HomeItemsDetail>
        <ProductImage><img src="/iphone.jpg" /></ProductImage>
        <Product>{itembox.product}</Product>
        <Price>{itembox.price}원</Price>
        <Address>{itembox.address}</Address>
        <Chat>{itembox.chat}</Chat>
        </HomeItemsDetail>
    </HomeItems>
  )
}

export default Items

const HomeItems = styled.div`
display: flex;
`

const ProductImage = styled.div`
img { 
  width: 150px;
  height: 200px;
}
`

const HomeItemsDetail = styled.div`
margin-bottom: 35px;
`

const Product = styled.div`
font-size: 17px;
margin-bottom: 5px;
`

const Price = styled.div`
font-size: 15px;
font-weight: 700;
margin-bottom: 3px;
`

const Address = styled.div`
font-size: 13px;
font-weight: 300;
margin-bottom: 3px;
`

const Chat = styled.div`
font-size: 12px;
color: gray;
`