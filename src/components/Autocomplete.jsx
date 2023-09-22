
import { useState } from "react";
import styled from "styled-components";



const AutocompleteContainer = styled.article`
`

const AutocompleteBox = styled.section`
    
`

const SearchBox = styled.input`
`

const searchValueList = ["가","가나","가나다","나","나다","나다라","마","마바","마바사","아","아자","아자차","a","ab","abc","b","bc","bcd","c","cd","cde"]
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
        {console.log("rkskek".includes("rksk"))}
        {console.log(searchValueList.map(searchValue=>{
          searchValue.includes(searchValue)
        }))}
      </AutocompleteBox>
    </AutocompleteContainer>
  )
}
export default Autocomplete;