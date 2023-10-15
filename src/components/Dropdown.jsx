

import { useState } from "react";
import styled from "styled-components";

const DropdownContainer = styled.ul`
  position: absolute;
  list-style: none;
  &>*{
    width: ${props=>props.dropdownWidth}
  }
  & li{
    background-color: white;
    cursor: pointer;
  }
`

const DropdownTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-top: 5%;
  cursor: pointer;
  &>:first-child{
    height: 100%; width: 100%;
    display: flex;
    justify-content: center;
  }
  &>:last-child>svg{
    display: flex;
  }
`

function Dropdown({width,options}){
  const [dropdownOpen,setDropdownOpen] = useState(false)
  const [selectValue, setSelectValue] = useState(options[0])
  function selected(e){
    setDropdownOpen(!dropdownOpen)
    setSelectValue(e.target.innerText)
  }
  
  return(
    <DropdownContainer dropdownWidth={width} onClick={()=>setDropdownOpen(!dropdownOpen)}>
      <DropdownTitle>
        <div>
          <span>
            {selectValue}
          </span>
        </div>
        <div>
          {dropdownOpen
            ? <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M0 512h139.6V372.4H0V512zm0-186.2h139.6V186.2H0v139.6zm46.5-93.1H93v46.5H46.5v-46.5zM0 139.6h139.6V0H0v139.6zm46.5-93.1H93V93H46.5V46.5zm314.2 35L442.2 0h-256v256l81.5-81.5C453.8 290.9 372.4 418.9 209.5 512c162.9 0 395.6-186.2 151.2-430.5z" /></svg>
            : <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M0 512h139.6V372.4H0V512zm46.5-93.1H93v46.5H46.5v-46.5zM0 139.6h139.6V0H0v139.6zm0 186.2h139.6V186.2H0v139.6zm46.5-93.1H93v46.5H46.5v-46.5zM209.5 0c162.9 93.1 244.4 221.1 58.2 337.5L186.2 256v256h256l-81.5-81.5C605.1 186.2 372.4 0 209.5 0z" /></svg>
          }
        </div>
      </DropdownTitle>
      {dropdownOpen
        ? options.map(option=><li onClick={selected}>{option}</li>)
        : null
      }
    </DropdownContainer>
  )
}
export default Dropdown;