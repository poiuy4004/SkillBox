

import { useState } from "react";

import constants from "../constants/constants";

import styled from "styled-components";

const AccordionContainer = styled.section`
  text-align: left;
  height: 0px; width: 50%;
`

const AccordionBox = styled.ul`
  background-color: rgba(255, 255, 255,0.3);
  list-style: none;
  &>li{
    background-color: white;
    margin: ${constants.layout.height/4}px ${constants.layout.width/4}px;
  }
`

const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`

const Content = styled.div`
  margin: ${constants.layout.height}px ${constants.layout.width}px;
`

function Accordion({title,contents}){
  const [accordionOpen, setAccordionOpen] = useState({})

  function openButton(idx){
    accordionOpen[idx]
    ? setAccordionOpen({...accordionOpen, [idx]: !accordionOpen[idx]})
    : setAccordionOpen({...accordionOpen, [idx]: true})
  }

  return(
    <AccordionContainer>
      <div>
        <h3>{title}</h3>
        <AccordionBox>
          {contents.map((content,idx)=>
            <li>
              <ContentTitle onClick={()=>openButton(idx)}>
                <h4>{content.title}</h4>
                {accordionOpen[idx]
                ? <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="#dcb67a" d="M27.4 5.5h-9.2l-2.1 4.2H4.3v16.8h25.2v-21Zm0 18.7H6.6V11.8h20.8Zm0-14.5h-8.2l1-2.1h7.1v2.1Z"/><path fill="#dcb67a" d="M25.7 13.7H.5l3.8 12.8h25.2l-3.8-12.8z"/></svg>
                : <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="#c09553" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"/></svg>
                }
              </ContentTitle>
              {accordionOpen[idx]
              ? <Content idx={idx}>{content.content}</Content>
              : null
              }
            </li>
          )}
        </AccordionBox>
      </div>
    </AccordionContainer>
  )
}
export default Accordion;