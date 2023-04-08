import React, { useContext } from "react";
import AppContext from "../context/Context";
import axiosApi from '../Utils/utils'
import Masks from "../Utils/Masks";
import style from "../style/registerForm.module.css"
import { MdAssignmentAdd, MdCancel } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa"


function EditForm ({setToggleVisibEdit}) {
  const {departments, editEmployee} = useContext(AppContext);
  
  const abortEmployeeEdit = () => {
    setToggleVisibEdit(false)
  }

  const getDate = (date) => {
  const currentDate = new Date(date)
  let month = +currentDate.getUTCMonth()+1
  month = month < 10 ? '0'+month : month;
  return currentDate.getUTCFullYear()+'-'+month+'-'+currentDate.getUTCDate()  
  }

  const updateEmployee = async () => {
    const {department: _, ...bodyRequest} = editEmployee.current

    const wage = editEmployee.current.wage.replace('.', '').replace(',', '.')

    bodyRequest.wage = wage;

    try {
      await axiosApi.put('/employees', bodyRequest);      
    } catch (error) {
      console.log(error.message)
    }


    window.location.reload();

  }
  
  return (
  <div className={style.modal}>
    <form className={style.formregister}>
      <h2>
        <FaUserEdit style={{fontSize: "40px", marginRight: "10px"}}/>
        Atualizar Funcionário
      </h2> 
      <label>
        Nome:
        <input 
          type="text"
          onChange={({target: {value}}) => editEmployee.current.employeeName = value}
          defaultValue={editEmployee.current.employeeName}
        />
      </label>
      <label>
        CPF:
        <input
         type="text"
         defaultValue={editEmployee.current.cpf}
         onInput={({target}) => {
          const {value, name} = target;
          editEmployee.current.cpf = Masks[name](value);
          target.value = Masks[name](value);
        }}
         name="cpf"
        />
      </label>
      <label>
        Departamento:
      <select
        defaultValue={editEmployee.current.departmentId}
        onChange={({target: {value}}) => editEmployee.current.departamentId = value}
      >
          {            
            departments.length > 0 && departments.map(({id, departmentName}) => (
                <option
                  key={id}
                  value={id}
                >{departmentName}</option>
            ))
          }
      </select>
    </label>
      <label>
        Salário:
        <input
         type="text"
         name="wage"
         defaultValue={editEmployee.current.wage}
         onChange={({target}) => {
          const {name, value} = target;
          editEmployee.current.wage = Masks[name](value);
          target.value = editEmployee.current.wage = Masks[name](value);
        }} 
        />
      </label>
      <label>
        Data de Nascimento:
        <input
         type="date"
         defaultValue={getDate(editEmployee.current.dateOfBirth)}
         onChange={({target: {value}}) => editEmployee.current.dateOfBirth &&
           getDate(editEmployee.current.dateOfBirth = value)
        }/>
      </label>
      <button type="Button" onClick={updateEmployee}>
        <MdAssignmentAdd style={{marginRight: "10px"}}/> Atualizar
      </button>
      <button
       type="Button"
       onClick={abortEmployeeEdit} 
      >
        <MdCancel style={{marginRight: "10px"}}/> Cancelar
      </button>
    </form>
  </div>
  )
}

export default EditForm