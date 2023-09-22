import { createPortal } from "react-dom";

import { useState } from "react";
import styled from "styled-components"
import constants from "../constants/constants"

const ModalOpenButton =styled.button`
  position: relative;
`

const ModalContainer = styled.section`
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalBox = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: ${constants.layout.height}px ${constants.layout.width}px;
  &>*{
    padding: ${constants.layout.height}px ${constants.layout.width}px;
  }
`

const ModalCloseButton = styled.button`
  float: right;
  font-size: larger;
  padding: 0;
`
const ModalHeader = styled.h3`
  text-align: center;
`
const ModalMain = styled.div`
`
const ModalFooter = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  &>*{
    padding: ${constants.layout.height}px ${constants.layout.width}px;
  }
`

function Modal({modalHeader, modalMain, modalFooter, closeButton}){

  const [modalOpen, setModalOpen] = useState(false); 

  return(
    <>
    <ModalOpenButton onClick={()=>setModalOpen(true)}>모달 여는 버튼</ModalOpenButton>
    {modalOpen?
      createPortal(
        <ModalContainer onClick={()=>setModalOpen(false)}>
          <ModalBox onClick={e=>e.stopPropagation()}>
            <ModalCloseButton onClick={()=>setModalOpen(false)}>
              X
            </ModalCloseButton>
            {modalHeader?
              <ModalHeader>
                {modalHeader}
              </ModalHeader>
              : null
            }
            <ModalMain>
              {modalMain}
            </ModalMain>
            {modalFooter?
              <ModalFooter>
                {modalFooter}
                {closeButton? <button onClick={()=>setModalOpen(false)}>모달 닫기</button>: null}
              </ModalFooter>
              : null
            }
          </ModalBox>
        </ModalContainer>,
        document.body
      )
      : ""
    }
    </>
  )
}
export default Modal;