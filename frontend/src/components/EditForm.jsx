import React, { useContext } from "react";
import AppContext from "../context/Context";
import axiosApi from '../Utils/utils'


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

    try {
      await axiosApi.put('/employees', bodyRequest);      
    } catch (error) {
      console.log(error.message)
    }


    window.location.reload();

  }
  
  return (
  <>
   <h4>Atualizar Funcionário</h4> 
    <form>
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
         onChange={({target: {value}}) => editEmployee.current.cpf = value}
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
         defaultValue={editEmployee.current.wage}
         onChange={({target: {value}}) => editEmployee.current.wage = +value} 
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
        Atualizar
      </button>
      <button
       type="Button"
       onClick={abortEmployeeEdit} 
      >
        Cancelar
      </button>
    </form>
  </>
  )
}

export default EditForm