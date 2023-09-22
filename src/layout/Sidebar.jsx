

import styled from "styled-components"

import PageList from "../page/PageList";

import constants from "../constants/constants";

const OpenSidebar = styled.nav`
  position: fixed;
  right: 0;
  width: ${constants.layout.width*14}px;
  min-height: ${window.innerHeight-constants.layout.height*2}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${constants.layout.height}px;
  background-color: rgb(0, 100, 100);
  color: white;
  transition: .8s;
  ${props=>props.open? "" : "transform: translateX(110%);"}
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
    <OpenSidebar open={open.sidebar}>
      <h1>Page List</h1>
      <ul>
        <li onClick={()=>setOpen({...open, vanillaList: !open.vanillaList})}>
          <h2>
            Vanilla Skill
          </h2>
        </li>
        <VanillaList open={open.vanillaList} onClick={()=>setOpen({...open, sidebar: !open.sidebar})}>
          {PageList.map(li=>(<li>{li}</li>))}
        </VanillaList>
        <li onClick={()=>setOpen({...open, libraryList: !open.libraryList})}>
          <h2>
            Library Skill
          </h2>
        </li>
        <LibraryList open={open.libraryList} onClick={()=>setOpen({...open, sidebar: !open.sidebar})}>

        </LibraryList>
      </ul>
    </OpenSidebar>
  )
}
export default Sidebar;