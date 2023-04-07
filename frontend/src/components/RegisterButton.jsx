import React,{ useContext } from "react";


function RegisterButton ({setToggleVisibRegister}) {

  const showEmployeeRegister = () => {
    setToggleVisibRegister(true)
  }

  return (
    <div>
      <button
        type="Button"
        onClick={showEmployeeRegister}
      >
        Novo Funcionário
      </button>
    </div>
  )
}

export default RegisterButton

