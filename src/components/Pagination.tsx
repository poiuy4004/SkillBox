
import { useState } from "react";
import styled from "styled-components";

const PaginationContainer = styled.article`
  width: 80%;
`
const PageList = styled.section`
  &>span{
    margin: 0 5%;
    cursor: pointer;
  }
`

function Pagination(){
  const [page,setPage] = useState<number>(1);
  const number: number[] = [1,2,3,4,5,6,7,8,9];
  return(
    <PaginationContainer>
      <section>{page} 페이지 입니다.</section>
      <PageList>
        <span onClick={()=>setPage(1)}>⇠</span>
        <span onClick={()=>{page-1>0? setPage(page-1) : setPage(1)}}>&lt;</span>
        <span onClick={e=>setPage(Number(e.target.innerText))} page={page-1<1? page : page-2<1? page-1 : page-2}>{page-1<1? page : page-2<1? page-1 : page-2}</span>
        <span onClick={e=>setPage(Number(e.target.innerText))} page={page-1<1? page+1 : page-2<1? page : page-1}>{page-1<1? page+1 : page-2<1? page : page-1}</span>
        <span onClick={e=>setPage(Number(e.target.innerText))} page={page-1<1? page+2 : page-2<1? page+1 : page}>{page-1<1? page+2 : page-2<1? page+1 : page}</span>
        <span onClick={e=>setPage(Number(e.target.innerText))} page={page-1<1? page+3 : page-2<1? page+2 : page+1}>{page-1<1? page+3 : page-2<1? page+2 : page+1}</span>
        <span onClick={e=>setPage(Number(e.target.innerText))} page={page-1<1? page+4 : page-2<1? page+3 : page+2}>{page-1<1? page+4 : page-2<1? page+3 : page+2}</span>
        <span onClick={()=>{page+1<number.length? setPage(page+1) : setPage(number.length)}}>&gt;</span>
        <span onClick={()=>setPage(number.length)}>⇢</span>
      </PageList>
    </PaginationContainer>
  )
}
export default Pagination;