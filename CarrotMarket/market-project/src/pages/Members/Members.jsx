import styled from "styled-components";
import MembersItems from "./components/MembersItems";


const Members = () => {
  const testArr = [{
		img: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
		name: '혜윤',
		part: '프론트엔드'
},{
		img: 'https://i.namu.wiki/i/hWLEwQhnjvdoRZQhrgHMKAZjiSVPO5D86_nBD6OCVLHamm0dM7Ssv2KTfYgjJj-V_X3hMsgV-LeIgI7lmbqzhA.webp',
		name: '태기',
		part: '프론트엔드'
},{
		img: 'https://i.namu.wiki/i/zfd-NOPP39XJ49BUBLXu8d3SAPsYnpvqYviuQHzSe8FqI6DhYAaHp5Nx30dWi_Q5XGUcbczMfuSp1lOMAN3NvA.webp',
		name: '수민',
		part: '프론트엔드'
},];

  return(
		<>
    <MembersList>
			<MembersTitle><h1>프론트엔드팀 멤버를 소개합니다!~</h1></MembersTitle>
			<MemItems>
      {
        testArr.map((val,idx)=> <MembersItems key={idx} member={val}/>)
      }
			</MemItems>
    </MembersList>
		</>
  )
}

export default Members


const MembersList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const MembersTitle = styled.div`
text-align: center;
margin: 50px 0;
`

const MemItems = styled.div`
display: grid;
column-gap: 40px;
row-gap: 10px;
`