import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/Context";


function SearchForm() {
  const {
    departments,
    // setFilterDepartment,
    // employees,
    // filterDepartment,
    setEmployees,
    employeesTable
  } = useContext(AppContext)
  
  const [employeeName, setEmployeeName] = useState('');
  const [departmentId, setDepartmentId] = useState(0);

  
  // const handledepartamentList = ({target: {value}}) => {
  //   setFilterDepartment(value)
  // }

  // const handleEmployeeSsearch = ({target: {value}}) => {
  //   setEmployeeName(value);
  // }

  const filterEmployees = () => {
    let dataFiltered;
    if(employeeName.length > 0 && +departmentId !== 0) {
      dataFiltered = employeesTable.filter((employee) => employee.employeeName
      .toLowerCase().includes(employeeName.toLowerCase()) && +employee.departmentId === +departmentId)

    } else if(employeeName.length === 0 && +departmentId !== 0){
      dataFiltered = employeesTable.filter((employee) => +employee.departmentId === +departmentId);

    } else if(employeeName.length > 0 && +departmentId === 0){
      dataFiltered = employeesTable.filter((employee) => employee.employeeName.toLowerCase().includes(employeeName.toLowerCase()))
      
    } else {
      dataFiltered = [...employeesTable]
    }
    setEmployees(dataFiltered)

    console.log(departmentId)
  }

  useEffect(() => {
    filterEmployees()
  }, [employeeName, departmentId])
  
  return (
    <div>
      <form>
        <label>
            Nome:
          <input 
            name="Nome"
            type="text"
            onChange={({target:{value}}) => setEmployeeName(value)}
            value={employeeName}     
          />
        </label>
        <label>
          Departamento:
          <select defaultValue={departmentId} onChange={({target:{value}}) => setDepartmentId(value)}>
            <option key={0} value={0}>Todos</option>
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
        {/* <button
          type="Button"
          onClick={({target:{value}}) => filterEmployees(value)}
        >
          Pesquisar
        </button> */}
      </form>
    </div>
  )
}

export default SearchForm