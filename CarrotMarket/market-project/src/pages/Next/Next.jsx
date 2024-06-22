import styled from "styled-components"
import NextButton from "./components/NextButton"
import NextItems from "./components/NextItems"

const Next = () => {
  const indexArr = ['전체','식당','카페','용달/이사','뷰티/미용','헬스/필라테스/요가']

  const contentsArr = [
    {
    title:"드롭플라워 - 송파",place:"가락1동",detail:"-송파구 단골순위 1위 꽃집 !!!",review:"후기200개"
    },
    {
    title:"훈민용달, 이사, 용달이사 화물",place:"화곡동",detail:"-화곡동 단골순위 1위 용달 !!!",review:"후기200개"
    },
    {
    title:"윤씨네 즉석두부",place:"신림동",detail:"-신림동 단골순위 1위 두부집 !!!",review:"후기200개"
    },
    {
    title:"영클린 홈케어",place:"서현동",detail:"-서현동 단골순위 1위 청소업체 !!!",review:"후기200개"
    },
    {
    title:"씨유네일",place:"독산동",detail:"-독산동 단골순위 1위 네일 !!!",review:"후기200개"
    },
    {
    title:"오떡순",place:"신림동",detail:"-신림동 단골순위 1위 분식집 !!!",review:"후기200개"
    },
    {
    title:"커피콩콩",place:"장성동",detail:"-장성동 단골순위 1위 카페 !!!",review:"후기200개"
    },
    {
    title:"스웻바이브",place:"장기동",detail:"-장기동 단골순위 1위 헬스장 !!!",review:"후기200개"
    }];

  return (
    <>
    <NextBanner>
      <img src="/Nextbanner.png" alt="nextBanner" />
    </NextBanner>
    <AnotherMarket>
      <AnotherMarketTitle><h1>다양한 동네업체를 볼 수 있어요</h1></AnotherMarketTitle>
      <AnotherMarketIndex>
      {
          indexArr.map((val,idx)=> <NextButton key={idx} buttonitems={val}/>)
        }
      </AnotherMarketIndex>
      <AnotherMarketList>
        {
          contentsArr.map((val,idx)=> <NextItems key={idx} nextitems={val}/>)
        }
      </AnotherMarketList>
    </AnotherMarket>
    </>
  )
}

export default Next

const NextBanner = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-bottom: 40px;
`

const AnotherMarket = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 40px;
`

const AnotherMarketTitle = styled.div`
  margin-bottom: 50px;
`

const AnotherMarketIndex = styled.div`
margin-bottom: 30px;
`

const AnotherMarketList = styled.div`
margin-bottom: 40px;
display: grid;
grid-template-columns: repeat(2, 1fr);
column-gap: 10px;

@media screen and (max-width: 768px){
  grid-template-columns: repeat(1, 1fr);
  }
`