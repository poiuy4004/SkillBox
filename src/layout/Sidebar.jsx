

import styled from "styled-components"

import pageList from "../page/pageList";

import constants from "../constants/constants";

const Container = styled.section`
  position: fixed;
  z-index: 9999;
  top: 0; right: 0;
  min-width: ${constants.layout.width*14}px;
  min-height: ${window.innerHeight}px;
  color: white;
  transition: .8s;
  ${props=>props.open? "" : "transform: translateX(110%);"}
  background-color: rgb(0, 100, 100);
  @media (max-width: 768px) {
    min-width: 100%;
  }
`
const OpenSidebar = styled.nav`
  min-height: ${window.innerHeight-constants.layout.height*2}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${constants.layout.height}px;
  & li{
    cursor: pointer;
  }
  & a{
    color: white;
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

function Sidebar({open, setOpen}){
  return(
    <Container open={open.sidebar}>
      <button onClick={()=>setOpen({...open,sidebar: false})}>
        <svg width={constants.layout.height} height={constants.layout.height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m22 6l8 10l-8 10m8-10H2"/>
        </svg>
        <span> Sidebar</span>
      </button>
      <OpenSidebar>
        <h1>Page List</h1>
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
      </OpenSidebar>
    </Container>
  )
}
export default Sidebar;