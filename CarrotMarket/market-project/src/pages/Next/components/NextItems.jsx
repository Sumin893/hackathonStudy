import styled from "styled-components";

const NextItem = ({nextitems}) => {
  return(
    <Nexticon>
      <NextItems>
        <ImageContent>
        <div><img src="/Happy.png" /> </div>
        </ImageContent>
        <Name>
          <TitleBox>
          <Title>{nextitems.title}</Title>
          <Place>{nextitems.place}</Place>
          </TitleBox>
          <Detail>{nextitems.detail}</Detail>
          <Review>{nextitems.review}</Review>
        </Name>
      </NextItems>
    </Nexticon>
  )
}

export default NextItem

const Nexticon =  styled.div`
display: flex;
border-bottom: 0.5px solid #E2E2E2;
padding: 10px 0 30px 0;
`


const NextItems = styled.div`
margin-top: 3px;
display: flex;

&:hover{
  background-color: #E2E2E2;
  color: black;
}
`

const ImageContent = styled.div`
margin-right: 20px;
`

const Name = styled.div`
width: 100%;
`

const TitleBox = styled.div`
display: flex;
margin-bottom: 3px;
`

const Title = styled.div`
font-weight: 700;
font-size: 17px;
margin-bottom: 3px;
padding-right: 10px;
`

const Place = styled.div`
font-size: 13px;
color: light-gray;
margin-bottom: 3px;
`

const Detail = styled.div`
font-size: 15px;
margin-bottom: 2px;
`

const Review = styled.div`
font-size: 12px;
color: #a9a9a9;
`