
import { useState } from "react";

import styled from "styled-components";

const TagContainer = styled.section`
  display: flex;
  min-height: 30px;
  background-color: white;
  & *{
    background-color: white;
  }
`

const TagBox = styled.ul`
  display: flex;
  list-style: none;
`
const EachTag = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: solid 1px blue;
  border-radius: 3px;
  &>:first-child{
    margin: 0 1px;
  }
  &>:last-child{
    height: 20px; width: 20px;
    margin: 0 1px;
    color: white;
    background-color: blue;
    border-radius: 50%;
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
        placeholder="태그를 입력해주세요."
        onKeyDown={e=>{
          if(e.key===("Enter"||" ")){
            if(tags.length<10){
            //   리액트에서의 이벤트(e)는 합성이벤트(SyntheticEvent)이고
            //   isComposing 함수를 구현하지 않았기에

            //   한글은 React 이벤트(e) 속에서
            //   진짜 JS 이벤트(nativeEvent)를 찾아서
            //   isComposing을 확인해주어야 한다.

            //   추가로, 알파벳과 숫자는 isComposing===false 이기에,
            //   조건을 추가했다.
              let alphabet = /[a-zA-Z0-9]/
              if(e.nativeEvent.isComposing||(alphabet.test(e.target.value.slice(-1)))){
                e.target.value[0]==="#"
                ? setTags([...tags,e.target.value.slice(1)])
                : setTags([...tags,e.target.value])
              }
              e.target.value=""
            }
            else if(tags.length>9){
              alert("태그는 10개까지 입력이 가능합니다.")
            }
          }
          // 내용이 없을 때 "Backspace"는 태그 하나 삭제
          if(e.key==="Backspace"&&e.target.value===""){
            let deleteTag = tags.slice(0,-1)
            setTags(deleteTag)
          }
        }}
      />
    </TagContainer>
  )
}
export default Tag;