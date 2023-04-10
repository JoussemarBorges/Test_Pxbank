import React, { useContext } from "react";
import AppContext from "../context/Context";
import {changeDate} from "../Utils/dateMask";
import style from '../style/tableForm.module.css'
import {MdCancel} from 'react-icons/md'
import {FaUserEdit} from 'react-icons/fa'
// import getDate from "../Utils/dateMask";


function EmployeeTable ({setToggleVisibEdit, setToggleVisibRegister, setToggleVisibAlert}) {
const {employees, setEmployeeIdToExclude, editEmployee} = useContext(AppContext);

const showDeleteAlert = () => {
  setToggleVisibAlert(true)
  setToggleVisibEdit(false)
  setToggleVisibRegister(false)
}

const showEmployeeEditForm = () => {
  setToggleVisibEdit(true)
  setToggleVisibRegister(false)
  setToggleVisibAlert(false)
  
}

return (
  <div className={style.tableContainer}>
  <table className={style.tableForm}>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Departamento</th>
        <th>Salário</th>
        <th>Data Nascimento</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
    {
      employees.length > 0 &&
      employees.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.employeeName}</td>
          <td>{employee.department.departmentName}</td>
          <td>{(+employee.wage).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
          <td>{changeDate(employee.dateOfBirth)}</td>
          <td>
            <button
             type="Button"
             data-employee={employee}
             onClick={() => {
              editEmployee.current = employee;
              showEmployeeEditForm()
            }}
            >
              <FaUserEdit />Editar
            </button>
            <button
             type="Button"
             data-employeeid={employee.id}
             onClick={({target: {dataset: {employeeid}}}) => {
              setEmployeeIdToExclude(+employeeid);
              showDeleteAlert()
              editEmployee.current = employee;
            }
            }
            >
              <MdCancel /> Excluir
            </button>
          </td>
        </tr>
      ))
    }
    </tbody>
  </table>
  </div>
)
}

export default EmployeeTable;