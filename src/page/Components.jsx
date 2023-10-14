
import styled from "styled-components";

import Modal from "../components/Modal";
import Toggle from "../components/Toggle";
import Tab from "../components/Tab";
import Tag from "../components/Tag";
import Autocomplete from "../components/Autocomplete";
import Select from "../components/Select";
import Dropdown from "../components/Dropdown";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";

import constants from "../constants/constants";

const ComponentsContainer = styled.article`
  padding: ${constants.layout.height}px ${constants.layout.width}px;
`
const ComponentBox = styled.section`
  padding: ${constants.layout.height}px ${constants.layout.width}px;
`
const OneComponent = styled.div`
  min-height: 500px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: ${constants.layout.height}px ${constants.layout.width}px;
`

const DropdownBox = styled.div`
  display: flex;
  &>:last-child>:last-child{
    display: flex;
    justify-content: center;
  }
`

function Components(){
  return(
    <ComponentsContainer>
      <h1>이곳은 UI 디자인 패턴들을 컴포넌트(Component)화 하여 저장한 공간입니다.</h1>

      <ComponentBox>
        <h2>모달 (Modal)</h2>
        <OneComponent>
          <Modal
            modalHeader={"모달창"}
            modalMain={"여기는 모달입니다."}
            modalFooter={<button>JSX도 넣을 수 있습니다.</button>}
            closeButton={true}
          />
        </OneComponent>
      </ComponentBox>
      <ComponentBox>
        <h2>토글 (Toggle)</h2>
        <OneComponent>
          <Toggle />
        </OneComponent>
      </ComponentBox>
      <ComponentBox>
        <h2>탭 (Tab)</h2>
        <OneComponent>
          <Tab
            tabSize={{height: "300",width: "500"}}
            titleList={["tab1","tab2","tab3"]}
            tabContentList={["1번째 탭 내용입니다.","2번째 탭 내용입니다.","3번째 탭 내용입니다."]}
          />
        </OneComponent>
      </ComponentBox>
      <ComponentBox>
        <h2>태그 (Tag)</h2>
        <OneComponent>
          <Tag />
        </OneComponent>
      </ComponentBox>
      <ComponentBox>
        <h2>자동완성 (Autocomplete)</h2>
        <OneComponent>
          <Autocomplete />
        </OneComponent>
      </ComponentBox>
      <ComponentBox>
        <h2>드롭다운 (Dropdown)</h2>
        <OneComponent>
          <DropdownBox>
            <span>
              <div>
                HTML <code>{`<select>`}</code> 태그 사용한 드롭다운
              </div>
              <Select
                name={"select 드랍다운 입니다."}
                options={[
                  "1번째 선택지",
                  "2번째 선택지",
                  "3번째 선택지"
                ]}
              />
            </span>
            <span>
              <div>
                HTML <code>{`<select>`}</code> 태그 없는 드롭다운
              </div>
              <div>
                <Dropdown
                  width="222px"
                  name={"select 없는 드랍다운 입니다."}
                  options={[
                    "1번쨰 선택지",
                    "2번째 선택지",
                    "3번째 선택지"
                  ]}
                />
              </div>
            </span>
          </DropdownBox>
        </OneComponent>
      </ComponentBox>
      <ComponentBox>
        <h2>아코디언 (Accordion)</h2>
        <OneComponent>
          <Accordion
            title={"아코디언"}
            contents={[
              {title: "1번째 제목", content: "1번째 내용"},
              {title: "2번째 내용", content: "2번째 제목"},
              {title: "3번째 제목", content: "3번째 내용"}
            ]}
          />
        </OneComponent>
      </ComponentBox>
      <ComponentBox>
        <h2>캐러셀 (Carousel)</h2>
        <OneComponent>
          <Carousel
            contents={["https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/27/nongmin/20230327131457130mnbf.png","https://img.hankyung.com/photo/202108/99.26501439.1.jpg","https://i.ytimg.com/vi/SJjVpLXHchM/maxresdefault.jpg","https://dispatch.cdnser.be/cms-content/uploads/2021/05/14/112854cf-c3e8-4630-af6a-b005e1550367.jpg","https://on.com2us.com/wp-content/uploads/2023/01/shutterstock_1938676873-scaled.jpg"]}

          />
        </OneComponent>
      </ComponentBox>
    </ComponentsContainer>
  )
}
export default Components;