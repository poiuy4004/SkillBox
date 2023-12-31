
import { useState } from "react";

import styled from "styled-components";

const TagContainer = styled.section`
  display: flex;
  min-height: 30px;
  background-color: white;
  & *{
    background-color: white;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const TagBox = styled.ul`
  display: flex;
  border: none;
  list-style: none;
  min-height: 15px;
`
const EachTag = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: solid 1px blue;
  border-radius: 3px;
  padding: 0 5px;
  &>:first-child{
    border: none;
    padding-right: 5px;
  }
  &>:last-child{
    color: red;
    border: none;
    cursor: pointer;
  }
`

const TagWrite = styled.input`
  padding: 0 3px;
  width: 300px;
`

function Tag(){
  const [tags,setTags] = useState([])
  return(
    <TagContainer>
      <TagBox>
        {tags.map((tag,idx)=>(
          <EachTag>
            <div>
              {tag}
            </div>
            <div onClick={()=>{
              let leftTags = tags.slice(0,idx)
              let rightTags = tags.slice(idx+1)
              setTags(leftTags.concat(rightTags))
            }}>
              x
            </div>
          </EachTag>
        ))}
      </TagBox>
      <TagWrite
        type="text"
        placeholder="Enter와 Comma를 사용하여 태그를 입력해주세요."
        onKeyUp={e=>{
          let alphabet = /[a-zA-Z0-9]/
          if(e.key==="Enter"||e.key===","){
            if(e.target.value.length<1){
              alert("내용을 입력해주세요.")
            }
            else if(e.target.value.length>10){
              alert("태그의 글자는 10자 이하여야 합니다.")
            }
            else if(tags.length>9){
              alert("태그는 10개까지 입력이 가능합니다.")
            }
              //   리액트에서의 이벤트(e)는 합성이벤트(SyntheticEvent)이고
              //   isComposing 함수를 구현하지 않았기에,
              //   한글은 React 이벤트(e) 속에서
              //   진짜 JS 이벤트(nativeEvent)를 찾아서
              //   isComposing을 확인해주어야 한다.

              //   추가로, 알파벳과 숫자는 isComposing===false 이기에,
              //   조건을 추가했다.
            else if(!e.nativeEvent.isComposing||alphabet.test(e.target.value[e.target.value.length-1])){
              e.target.value[0]==="#"
              ? setTags([...tags,e.target.value.slice(1)])
              : setTags([...tags,e.target.value])
              e.target.value[e.target.value.length-1]===","
              ? setTags([...tags,e.target.value.slice(0,-1)])
              : setTags([...tags,e.target.value])
            }
            e.target.value=""
          }
          // 내용이 없을 때 "Backspace"는 태그 하나 삭제
          if(e.key==="Backspace"&&e.target.value===""){
            setTags(tags.slice(0,-1))
          }
        }}
      />
    </TagContainer>
  )
}
export default Tag;