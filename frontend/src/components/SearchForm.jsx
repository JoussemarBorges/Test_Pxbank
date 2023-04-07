import React, { useEffect, useState } from "react";
import axios from 'axios'


function SearchForm() {
  const [departments, setDepartments] = useState([]);

  
  const getDepartments = async () => {
    const api = axios.create({baseURL: 'http://localhost:3001'})
    
    const { data } = await api.get('/departments');

    
    setDepartments(data)
  }
  
  useEffect(() => {
    getDepartments();
  }, [])

  return (
    <div>
      <form>
        <label>
            Nome:
          <input 
            name="Nome"
            type={Text}      
          />
        </label>
        <label>
          Departamento:
          <select>
            {            
            departments.length > 0 && departments.map(({id, departmentName}, i) => (
                <option key={i} value={id}>{departmentName}</option>
            ))
            }
          </select>
        </label>
      </form>
      <button
        type="Button"
      >
        Pesquisar
      </button>
    </div>
  )
}

export default SearchForm