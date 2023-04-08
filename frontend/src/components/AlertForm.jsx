import React, { useContext } from "react";
import AppContext from "../context/Context";
import axiosApi from "../Utils/utils";
import style from "../style/registerForm.module.css"
import { MdCancel } from "react-icons/md";
import {ImExit} from "react-icons/im"


function AlertForm({setToggleVisibAlert}) {

  const {editEmployee, employees, setEmployees, employeeIdToExclude} = useContext(AppContext)

  const deleteEmployee = async () => {
    await axiosApi.delete(`/employees/${employeeIdToExclude}`);

    const updatedEmployees = employees.filter((employee) => +employee.id !== +employeeIdToExclude )

    setEmployees(updatedEmployees)

    setToggleVisibAlert(false)
  }
  return(
  <div className={style.modal}>
    <form className={style.formregister}>
      <h3>Deseja excluir o funcionário abaixo</h3>
      <div>
        <label>
          Nome: 
        </label>
          <span>{editEmployee.current.employeeName}</span>
      </div>
      <div>
        <label>
          CPF: 
        </label>
        <span>{editEmployee.current.cpf}</span>
      </div>
       <div className={style.containerbuttons}>
        <button
          type="Button"
          onClick={() => setToggleVisibAlert(false)}
        >
          <ImExit style={{marginRight: "10px"}} />
          Cancelar
        </button>
        <button
          type="Button"
          onClick={deleteEmployee}>
            <MdCancel style={{marginRight: "10px"}}/>  
            Excluir
          </button>
       </div>
    </form>
  </div>
  )
}

export default AlertForm