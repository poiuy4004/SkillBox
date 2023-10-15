
import { useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.article`
  display: flex;
  height: ${window.innerHeight*0.5}px;
  width: ${window.innerWidth*0.55}px;
  &>button{
    width: ${window.innerHeight*0.05}px;
  }
`

const CarouselBox = styled.section`
  display: flex;
  height: ${window.innerHeight*0.5}px;
  width: ${window.innerWidth*0.5}px;
  overflow: hidden;
  border: none;
  & *{
    border: none;
  }
`
const CarouselList = styled.ul`
  list-style: none;
  display: flex;
  height: 100%; width: ${props=>props.contentsLength*window.innerWidth*0.5}px;
  transition: 1s;
  transform: translateX(-${props=>100/props.contentsLength*props.page}%);
  &>li{
    height: ${window.innerHeight*0.5}px;
    width: ${window.innerWidth*0.5}px;
  }
`


function Carousel({contents}){
  const [page,setPage] = useState(0)

  function listFront(){
    page-1>=0
    ? setPage(page-1)
    : setPage(contents.length-1)
  }
  function listBack(){
    page+1<contents.length
    ? setPage(page+1)
    : setPage(0)
  }

  return(
    <CarouselContainer>
      <button onClick={listFront}>&lt;</button>
      <CarouselBox>
        <CarouselList contentsLength={contents.length} page={page}>
          {contents.map(
            (content,idx)=>{
              return <li><img idx={idx} src={content} height="100%" width={window.innerWidth*0.5+"px"}></img></li>
            }
          )}
        </CarouselList>
      </CarouselBox>
      <button onClick={listBack}>&gt;</button>
    </CarouselContainer>
  )
}
export default Carousel;