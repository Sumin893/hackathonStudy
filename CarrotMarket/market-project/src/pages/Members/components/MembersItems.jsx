import styled from "styled-components";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


const MemItems = ({member}) => {
  const [isHeart, setIsHeart] = useState(false);

  return(
    <MembersItem>
        <Image src= {member.img}/>
      <MembersItemDetail>
        <Name><h3>{member.name}</h3></Name>
        <Part>{member.part}</Part>
      </MembersItemDetail>
      {isHeart ? 
      <FaHeart onClick={() => setIsHeart(false)}size={15}/> :
      <CiHeart onClick={() => setIsHeart(true)} size={20}/>}
    </MembersItem>
  )
}

export default MemItems;

const MembersItem = styled.div`
margin: 20px;
padding: 20px;
`

const Image = styled.img`
  width: 150px;
  height: 200px;
`

const MembersItemDetail = styled.div`
`

const Name = styled.div`
  margin-bottom: 5px;
  
`

const Part = styled.div`
  color: gray;
`