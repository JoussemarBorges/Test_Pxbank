import React from "react";
import {BsPersonFillAdd} from 'react-icons/bs'
function RegisterButton ({setToggleVisibRegister, setToggleVisibEdit}) {

  const showEmployeeRegister = () => {
    setToggleVisibRegister(true)
    setToggleVisibEdit(false)
  }

  return (
    <div>
      <button
        type="Button"
        onClick={showEmployeeRegister}
      >
        <BsPersonFillAdd style={{marginRight:'5px', fontSize:'35px'}} />
         Novo Funcionário
      </button>
    </div>
  )
}

export default RegisterButton

