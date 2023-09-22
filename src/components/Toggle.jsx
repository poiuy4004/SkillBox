
import { useState } from "react"
import styled from "styled-components"


const ToggleContainer = styled.div`
  display: flex;
  border: none;
  cursor: pointer;
  &>div{
    height: 55px; width: 55px;
  }
`

const LeftCircle = styled.div`
  border: solid 3px ${props=>props.toggleOn? "rgb(0,255,255)" : "rgb(64, 64, 128);"};
  border-right: none !important;
  border-radius: 100% 0 0 100%;
  transition: 1s;
  ${props=>props.toggleOn? "background: linear-gradient(to right, white, rgb(0, 255, 255));" : "background: linear-gradient(to right, rgb(0, 0, 0), rgb(64,0,0));"}
`
const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px; width: 45px;
  border: ${props=>props.toggleOn? "solid 1px rgb(0, 0, 255)" : "solid 1px rgb(128,128,128)"};
  border-radius: 100%;
  transition: 1s;
  ${props=>props.toggleOn? "background-color: rgb(255, 255, 255);" : "background-color: rgb(64, 64, 128); transform: translateX(-55px);"}
  & *{
    border: none;
  }
`
const RightCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 3px ${props=>props.toggleOn? "rgb(0,255,255)" : "rgb(64, 64, 128);"};
  border-left: none !important;
  border-radius: 0 100% 100% 0;
  transition: 1s;
  ${props=>props.toggleOn? "background: linear-gradient(to right, rgb(0, 255, 255), rgb(128, 128, 255));" : "background: linear-gradient(to right, rgb(64, 0, 0), rgb(128,0,0));"}
`

function Toggle(){
  const [toggleOn, setToggleOn] = useState(false)
  return(
    <ToggleContainer onClick={()=>setToggleOn(!toggleOn)}>
      <LeftCircle toggleOn={toggleOn} />
      <RightCircle toggleOn={toggleOn}>
        <Circle toggleOn={toggleOn}>
          {toggleOn?
            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="#000000" fill-opacity="0"><path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"><animate id="lineMdMoonLoop0" fill="freeze" attributeName="fill-opacity" begin="0.7s;lineMdMoonLoop0.begin+6s" dur="0.4s" values="0;1"/><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+2.2s" dur="0.4s" values="1;0"/></path><path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+3s" dur="0.4s" values="0;1"/><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+5.2s" dur="0.4s" values="1;0"/></path><path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+0.4s" dur="0.4s" values="0;1"/><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+2.8s" dur="0.4s" values="1;0"/></path><path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+3.4s" dur="0.4s" values="0;1"/><animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+5.6s" dur="0.4s" values="1;0"/></path></g><path fill="none" stroke="#000000" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"/></path></svg>
            : <svg width="30" height="30" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#fcc21b" d="M64 30.34c-18.59 0-33.66 15.07-33.66 33.65c0 18.59 15.07 33.66 33.66 33.66c18.59 0 33.66-15.07 33.66-33.66c0-18.58-15.07-33.65-33.66-33.65zm-7.24-6.13h14.49c.67 0 1.29-.33 1.68-.88c.38-.54.47-1.25.24-1.88L65.92 1.83C65.62 1.02 64.86.49 64 .49s-1.62.54-1.92 1.34l-7.25 19.63c-.23.63-.14 1.33.24 1.88c.39.55 1.02.87 1.69.87zm40.5 16.78c.38.39.91.6 1.44.6c.12 0 .24-.01.36-.03c.66-.12 1.21-.55 1.5-1.16l8.76-19.01c.36-.78.19-1.69-.41-2.3c-.61-.61-1.53-.77-2.31-.42l-19 8.77c-.61.28-1.04.84-1.16 1.5c-.12.66.1 1.33.56 1.81l10.26 10.24zm28.92 21.09l-19.64-7.24c-.63-.23-1.33-.14-1.88.24c-.55.38-.87 1-.87 1.67l.01 14.49c0 .67.33 1.3.88 1.68c.35.23.76.36 1.17.36c.24 0 .48-.04.71-.13l19.64-7.24c.8-.29 1.34-1.06 1.34-1.93c-.02-.84-.55-1.6-1.36-1.9zM100.56 87.6a2.05 2.05 0 0 0-1.5-1.16c-.66-.11-1.34.1-1.8.57L87.01 97.26c-.47.47-.69 1.15-.57 1.81c.12.65.55 1.22 1.16 1.5l19.01 8.76c.27.13.56.18.86.18c.53 0 1.05-.21 1.44-.6c.61-.61.77-1.52.41-2.3l-8.76-19.01zm-29.32 16.18l-14.49.01c-.67 0-1.29.33-1.67.88c-.38.55-.47 1.25-.25 1.87l7.25 19.64c.3.8 1.06 1.34 1.92 1.34s1.62-.54 1.92-1.34l7.25-19.64c.23-.63.14-1.33-.24-1.88c-.39-.55-1.01-.88-1.69-.88zm-40.5-16.77c-.47-.47-1.14-.68-1.8-.57c-.66.12-1.22.55-1.5 1.16l-8.76 19.01c-.36.78-.19 1.7.42 2.3a2.038 2.038 0 0 0 2.3.41l19.01-8.77a2.05 2.05 0 0 0 1.16-1.5c.12-.66-.1-1.33-.57-1.8L30.74 87.01zm-8.57-13.72c.41 0 .82-.13 1.17-.37c.55-.38.88-1.01.88-1.68l-.01-14.49a2.045 2.045 0 0 0-2.75-1.92L1.82 62.08a2.045 2.045 0 0 0 0 3.84l19.65 7.24c.23.09.46.13.7.13zm5.28-32.89a2.05 2.05 0 0 0 3.31.59L41 30.74c.47-.48.68-1.15.56-1.81c-.12-.65-.55-1.21-1.16-1.49l-19.02-8.76c-.78-.36-1.69-.19-2.3.42c-.61.61-.77 1.52-.41 2.3l8.78 19z"/></svg>
          }
        </Circle>
      </RightCircle>
    </ToggleContainer>
  )
}
export default Toggle;