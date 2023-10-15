
import { useState } from "react";
import styled from "styled-components";

const PaginationContainer = styled.article`
  width: 80%;
`
const PageList = styled.section`
  &>span{
    margin: 0 1%;
    cursor: pointer;
  }
`
const NumList = styled.span`
    ${props=>props.page===props.thisNum
    ? "font-weight: bolder; text-decoration: underline;"
    : null
    }
`

function Pagination({number}){
  const [page,setPage] = useState<number>(1);

  return(
    <PaginationContainer>
      <section>
        <div>{number[page-1].title}</div>
        <div>{number[page-1].content}</div>
      </section>
      <PageList>
        <span onClick={()=>setPage(1)}>⇠</span>
        <span onClick={()=>{page-1>0? setPage(page-1) : setPage(1)}}>&lt;</span>
        <NumList onClick={e=>setPage(Number(e.target.innerText))} page={page} thisNum={page-1<1? page : page-2<1? page-1 : page-2}>{page-1<1? page : page-2<1? page-1 : page-2}</NumList>
        <NumList onClick={e=>setPage(Number(e.target.innerText))} page={page} thisNum={page-1<1? page+1 : page-2<1? page : page-1}>{page-1<1? page+1 : page-2<1? page : page-1}</NumList>
        <NumList onClick={e=>setPage(Number(e.target.innerText))} page={page} thisNum={page-1<1? page+2 : page-2<1? page+1 : page}>{page-1<1? page+2 : page-2<1? page+1 : page}</NumList>
        {page+1<number.length+1
        ? <NumList onClick={e=>setPage(Number(e.target.innerText))} page={page} thisNum={page-1<1? page+3 : page-2<1? page+2 : page+1}>{page-1<1? page+3 : page-2<1? page+2 : page+1}</NumList>
        : <span>●</span>
        }
        {page+2<number.length+1
        ? <NumList onClick={e=>setPage(Number(e.target.innerText))} page={page} thisNum={page-1<1? page+4 : page-2<1? page+3 : page+2}>{page-1<1? page+4 : page-2<1? page+3 : page+2}</NumList>
        : <span>●</span>
        }
        <span onClick={()=>{page+1<number.length? setPage(page+1) : setPage(number.length)}}>&gt;</span>
        <span onClick={()=>setPage(number.length)}>⇢</span>
      </PageList>
    </PaginationContainer>
  )
}
export default Pagination;