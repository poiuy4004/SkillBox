


import { useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.section`
  width: 1000px; height: 300px;
`
const CarouselBox = styled.div`
  display: flex;
  width: 500px; height: 300px;
  &>:nth-child(2){
    margin: 0 5%;
  }
`


function Carousel({contents}){
  const [page,setPage] = useState(0)
  return(
    <CarouselContainer>
      <CarouselBox>
          <span><img src={page-1<0? contents[contents.length-1] : contents[page-1]} height="300px" width="500px"></img></span>
          <span><img src={contents[page]} height="300px" width="500px"></img></span>
          <span><img src={page+1>=page.length? contents[0] : contents[page+1]} height="300px" width="500px"></img></span>
          {console.log(page+1)}
      </CarouselBox>
    </CarouselContainer>
  )
}
export default Carousel;