import React, { useContext } from "react";
import AppContext from "../context/Context";
import axiosApi from "../Utils/utils";
import changeDate from "../Utils/dateMask";


function EmployeeTable ({setToggleVisibEdit}) {
const {employees, setEmployees, editEmployee} = useContext(AppContext);

const deleteEmployee = async ({target: {dataset: {employeeid}}}) =>{
  await axiosApi.delete(`/employees/${employeeid}`)

  const updatedEmployees = employees.filter((employee) => +employee.id !== +employeeid )

  setEmployees(updatedEmployees)
}

const showEmployeeEditForm = () => {
  setToggleVisibEdit(true)
}

return (
  <>
  <table>
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
          <td>{employee.wage}</td>
          <td>{changeDate(employee.dateOfBirth)}</td>
          <td>
            <button
             type="Button"
             data-employee={employee}
             onClick={() =>{editEmployee.current = employee; showEmployeeEditForm()}}
            >
              Editar
            </button>
            <button
             type="Button"
             data-employeeid={employee.id}
             onClick={deleteEmployee}
            >
              Excluir
            </button>
          </td>
        </tr>
      ))
    }
    </tbody>
  </table>
  </>
)
}

export default EmployeeTable;