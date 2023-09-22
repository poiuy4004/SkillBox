import { useState } from "react";

import styled from "styled-components";

import constants from "../constants/constants";

const TabContainer = styled.article`
  height: ${props=>props.tabSize? props.tabSize.height : constants.layout.height*20}px;
  width: ${props=>props.tabSize? props.tabSize.width : constants.layout.width*20}px;
  padding: ${constants.layout.height}px ${constants.layout.width}px;
  border-radius: 14px;
  background-color: gray;
  font-size: larger;
  font-weight: bolder;
`

const TitleBox = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  height: 25%;
  border-bottom: none;
`
const Title = styled.li`
  height: 100%; width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props=>props.tab===props.tabNumber? "white" : "gray"};
  padding: ${constants.layout.height}px ${constants.layout.width}px;
  cursor: pointer;
  border-bottom: ${props=>props.tab===props.tabNumber? "none" : "solid 1px black"};
`

const ContentBox = styled.div`
  position: relative;
  height: 75%;
  border-top: none;
`
const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${props=>props.tab===props.tabNumber? "white" : "gray" };
  z-index: ${props=>props.tab===props.tabNumber? 999 : 0};
  border-top: none;
`

function Tab({tabSize, titleList, tabContentList}){
  const [tabNumber,setTabNumber] = useState(0)
  return(
    <TabContainer tabSize={tabSize}>
      <TitleBox>
        {titleList.map((title,idx)=>(
            <Title tab={idx} tabNumber={tabNumber} onClick={()=>setTabNumber(idx)}>{title}</Title>
        ))}
      </TitleBox>
      <ContentBox>
        {tabContentList.map((content,idx)=>(
            <Content tab={idx} tabNumber={tabNumber}>{content}</Content>
        ))}
      </ContentBox>
    </TabContainer>
  )
}
export default Tab;