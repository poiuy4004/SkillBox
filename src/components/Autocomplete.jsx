
import { useState } from "react";
import styled from "styled-components";



const AutocompleteContainer = styled.section`
`

const AutocompleteBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 300px; width: 300px;
`

const SearchBox = styled.input`
  padding: 0 5%;
  width: 100%;
  border-radius: 8px 8px 0 0;
`

const ListBox = styled.ul`
  list-style: none;
  &>li{
    text-align: left;
    background-color: white;
    padding: 0 5%;
  }
  &>:last-child{
    border-radius: 0 0 8px 8px;
  }
`

const searchValueList = ["가","가나","가나다","나","나다","나다라","마","마바","마바사","아","아자","아자차","카","타","파","하","a","ab","abc","b","bc","bcd","c","cd","cde","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function Autocomplete(){
  
  const [searchValue,setSearchValue] = useState("")

  return(
    <AutocompleteContainer>
      <AutocompleteBox>
        <SearchBox
          type="serach"
          placeholder="검색어를 입력하세요"
          value={searchValue}
          onChange={e=>setSearchValue(e.target.value)}
        />
        <ListBox>
          {searchValueList.map(ValueInList=>{
            if(ValueInList.includes(searchValue)&&!(searchValue==="")){
              return <li>{ValueInList}</li>
            }
          })}
        </ListBox>
      </AutocompleteBox>
    </AutocompleteContainer>
  )
}
export default Autocomplete;