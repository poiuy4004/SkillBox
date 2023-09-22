
import { Link } from "react-router-dom"
import styled from "styled-components"

import constants from "../constants/constants"

import Logo from "../assets/Skill_Box.png"


const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  height: ${constants.layout.height*2}px;
`

const HeaderLeft = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: ${constants.layout.height} ${constants.layout.width};
  &>:first-child{
    display: flex;
    cursor: pointer;
    &>*{
      display: flex;
      align-items: center;
    }
  }
`

const HeaderRight = styled(HeaderLeft)`

`

const LoginButton = styled.button`
  cursor: pointer;
`
const SidebarButton = styled.button`
  cursor: pointer;
`

function Header({open,setOpen}){
  return(
    <HeaderBox>
      <HeaderLeft>
        <Link to="/">
          <div>
            <svg width={constants.layout.height*2} height={constants.layout.height*2} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path fill="#BDC3C7" fill-rule="evenodd" d="M97.55 85.718L45.407 33.574c-4.588-4.587 3.054-15.538-5.729-24.32L23.664 0l-3.381 3.38l8.832 8.831c3.381 3.38.849 10.983-2.545 14.377c-3.367 3.367-10.977 5.906-14.357 2.525l-8.833-8.83L0 23.664l9.254 16.014c8.734 8.735 19.87 1.277 24.321 5.729l52.143 52.144A8.367 8.367 0 0 0 97.55 85.718zm-3.381 8.451a3.585 3.585 0 1 1-5.07-5.07a3.585 3.585 0 0 1 5.07 5.07z" clip-rule="evenodd"/>
              <path fill="#95A5A6" d="M33.682 12.334L22.512 1.151L20.283 3.38l8.832 8.831c3.381 3.38.849 10.983-2.545 14.377c-3.367 3.367-10.977 5.906-14.357 2.525l-8.833-8.83l-1.975 1.975l11.177 11.19c1.524 1.525 3.914 2.332 6.911 2.332c4.492 0 9.453-1.824 12.063-4.437c4.417-4.42 6.311-14.822 2.126-19.009zm62.064 75.615L45.775 37.972c-1.042-1.042-2.426-1.615-3.898-1.615s-2.857.574-3.898 1.615a5.522 5.522 0 0 0 0 7.798L87.95 95.746c1.041 1.042 2.426 1.615 3.898 1.615s2.857-.573 3.898-1.615a5.52 5.52 0 0 0 0-7.797zm-1.577 6.22a3.585 3.585 0 1 1-5.07-5.07a3.585 3.585 0 0 1 5.07 5.07z"/>
              <path fill="#ECF0F1" fill-rule="evenodd" d="M80 14L93 4l7 7l-10 13h-5L55 54l-5-5l30-30v-5z" clip-rule="evenodd"/>
              <path fill="#BDC3C7" fill-rule="evenodd" d="M52.5 51.5L55 54l30-30h5l10-13l-3.5-3.5z" clip-rule="evenodd"/>
              <path fill="#D35400" fill-rule="evenodd" d="m42.51 46.095l.854.845L5.768 84.161a5.931 5.931 0 0 0 0 8.447l5.119 5.068c2.356 2.332 5.17 3.326 7.526.994l38.603-38.216l.853.845c.942.933 2.471.933 3.413 0s.942-2.446 0-3.379L45.923 42.716c-.942-.933-2.471-.933-3.413 0s-.943 2.446 0 3.379z" clip-rule="evenodd"/>
              <path fill="#E66612" fill-rule="evenodd" d="M50.25 53.75L8.594 95.406l2.293 2.271c2.356 2.332 5.17 3.326 7.526.994l38.573-38.186l-6.736-6.735z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div>
            <img src={Logo} height={constants.layout.height*2} />
          </div>
        </Link>
      </HeaderLeft>
      <HeaderRight>
        <LoginButton>
          Login
        </LoginButton>
        <SidebarButton onClick={()=>setOpen({...open,sidebar: !open.sidebar})}>
          {open.sidebar?
            <svg width={constants.layout.height} height={constants.layout.height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m22 6l8 10l-8 10m8-10H2"/>
            </svg>
          :
            <svg width={constants.layout.height} height={constants.layout.height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6L2 16l8 10M2 16h28"/>
            </svg>
          }
          <div>Sidebar</div>
        </SidebarButton>
      </HeaderRight>
    </HeaderBox>
  )
}
export default Header;