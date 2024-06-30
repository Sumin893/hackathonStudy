import styled from "styled-components";

const MemItems = ({member}) => {
  console.log(member)

  return(
    <MembersItem>
        <Image>{member.image}</Image>
      <MembersItemDetail>
        <Name><h3>{member.name}</h3></Name>
        <Part>{member.part}</Part>
      </MembersItemDetail>
    </MembersItem>
  )
}

export default MemItems;

const MembersItem = styled.div`
  display: flex;
  justify-content: center;
`

const Image = styled.div`
/* img {
  width: 150px;
  height: 200px;
} */
`

const MembersItemDetail = styled.div`
`

const Name = styled.div`
  margin-bottom: 10px;
  
`

const Part = styled.div`
  color: gray;
`