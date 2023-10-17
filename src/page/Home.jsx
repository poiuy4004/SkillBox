
import styled from "styled-components";

import pageList from "../page/pageList";

const Container = styled.section`
  display: flex;
  border: solid 1px black;
  min-height: ${window.innerHeight*0.8}px;
  margin: 5%;
  padding: 5%;
  justify-content: center;
  & li{
    cursor: pointer;
  }
`

const VanillaList = styled.ol`
  overflow: hidden;
  transition: .8s;
  ${props=>props.open?
    "transform: scaleY(auto);"
    : "transform: scaleY(0); height: 0;"}
`
const LibraryList = styled(VanillaList)`
  
`

function Home({open,setOpen}){
  return(
    <article>
      <Container>
        <ul>
          <li onClick={()=>setOpen({...open, vanillaList: !open.vanillaList})}>
            <h2>
              Vanilla Skill
            </h2>
          </li>
          <VanillaList open={open.vanillaList} onClick={()=>setOpen({...open, sidebar: false})}>
            {pageList.map(li=>(<li>{li}</li>))}
          </VanillaList>
          <li onClick={()=>setOpen({...open, libraryList: !open.libraryList})}>
            <h2>
              Library Skill
            </h2>
          </li>
          <LibraryList open={open.libraryList} onClick={()=>setOpen({...open, sidebar: false})}>

          </LibraryList>
        </ul>
      </Container>
    </article>
  )
}
export default Home;