import React, { useContext } from "react";
import AppContext from "../context/Context";


function RegisterOrUpdateForm () {
  const {departments} = useContext(AppContext)
  
  return (
  <>
    <form>
      <label>
        Nome:
        <input type="text" />
      </label>
      <label>
        CPF:
        <input type="text" />
      </label>
      <label>
        Departamento:
      <select>
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
      <label>
        Salário:
        <input type="text" />
      </label>
      <label>
        Data de Nascimento:
        <input type="date" />
      </label>
      <button type="Button">
        Cadastrar
      </button>
      <button type="Button">
        Atualizar
      </button>
    </form>
  </>
  )
}

export default RegisterOrUpdateForm