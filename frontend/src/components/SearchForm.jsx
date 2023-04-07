import React, { useContext, useState } from "react";
import AppContext from "../context/Context";


function SearchForm() {
  const {departments, setFilterDepartment} = useContext(AppContext)
  
  const [employeeName, setEmployeeName] = useState('');

  
  const handledepartamentList = ({target: {value}}) => {
    setFilterDepartment(value)
  }

  const handleEmployeeSsearch = ({target: {value}}) => {
    setEmployeeName(value);
    console.log(employeeName)
  }
  
  return (
    <div>
      <form>
        <label>
            Nome:
          <input 
            name="Nome"
            type="text"
            onChange={handleEmployeeSsearch}     
          />
        </label>
        <label>
          Departamento:
          <select onChange={handledepartamentList}>
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
        <button
          type="Button"
        >
          Pesquisar
        </button>
      </form>
    </div>
  )
}

export default SearchForm