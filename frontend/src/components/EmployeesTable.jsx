import React, { useContext } from "react";
import AppContext from "../context/Context";


function EmployeeTable () {
const {employees} = useContext(AppContext);
// const [dataTable, setDataTable] = useState([]);

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
          <td>{employee.dateOfBirth}</td>
          <td>
            <button type="Button" value={employee}>Editar</button>
            <button type="Button" value={employee}>Excluir</button>
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