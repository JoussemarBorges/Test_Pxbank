import React, { useContext, useState } from "react";
import AppContext from "../context/Context";
import cpfMask from "../Utils/cpfMask";
import axiosApi from "../Utils/utils";


function RegisterForm ({setToggleVisibRegister}) {
  const {departments} = useContext(AppContext);

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [department, setDepartment] = useState(1);
  const [wage, setWage] = useState(0);
  const [birthDate, setBirthDate] = useState(Date);

  const abortEmployeeRegister= () => {
    setToggleVisibRegister(false)
  }

  const registerNewEmployee = async () => {
    const bodyRequest = {
      employeeName: name,
      cpf: cpf,
      wage: wage,
      dateOfBirth: birthDate,
      departmentId: department
    }
    const {data} = await axiosApi.post('/employees', bodyRequest)

    window.location.reload();

        
  }
  
  return (
  <>

  <h4>Novo Funcionário</h4>
    <form id="registerForm">
      <label>
        Nome:
        <input onChange={({target: {value}}) => setName(value)} type="text" />
      </label>
      <label>
        CPF:
        <input onChange={({target: {value}}) => setCpf(cpfMask(value))} type="number" />
      </label>
      <label>
        Departamento:
      <select onChange={({target: {value}}) => setDepartment(+value)}>
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
        <input type="text" onChange={({target: {value}}) => setWage(+value)} />
      </label>
      <label>
        Data de Nascimento:
        <input type="date" onChange={({target: {value}}) => setBirthDate(value)} />
      </label>
      <button type="Button" onClick={registerNewEmployee}>
        Cadastrar
      </button>
      <button
       type="Button"
       onClick={abortEmployeeRegister}
      >
        Cancelar
      </button>
    </form>
  </>
  )
}

export default RegisterForm