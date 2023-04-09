import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/Context";
import style from '../style/searchForm.module.css'


function SearchForm() {
  const {
    departments,
    setEmployees,
    employeesTable
  } = useContext(AppContext)
  
  const [employeeName, setEmployeeName] = useState('');
  const [departmentId, setDepartmentId] = useState(0);


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

  }

  useEffect(() => {
    filterEmployees()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeName, departmentId])
  
  return (
    <form className={style.searchForm}>
        <h3>Pesquisar</h3>
        <label>
            Funcionário:
          <input 
            placeholder="Nome"
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
      </form>
  )
}

export default SearchForm