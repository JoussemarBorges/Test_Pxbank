import React, { useContext, useState } from "react";
import AppContext from "../context/Context";
import Masks from "../Utils/Masks";
import axiosApi from "../Utils/utils";
import style from "../style/registerForm.module.css"
import {MdAssignmentAdd} from 'react-icons/md'
import {MdCancel} from 'react-icons/md'
import { FaUserPlus } from "react-icons/fa";


function RegisterForm ({setToggleVisibRegister}) {
  const {departments} = useContext(AppContext);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [department, setDepartment] = useState(1);
  const [wage, setWage] = useState('');
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState(null);
  // const [isDisabled, setIsDisabled] = useState(true)

  const abortEmployeeRegister= () => {
    setToggleVisibRegister(false)
  }

  const registerNewEmployee = async () => {
    const bodyRequest = {
      employeeName: name,
      cpf: cpf,
      wage: +wage.replace('.', '').replace(',', '.'),
      dateOfBirth: birthDate,
      departmentId: department
    }

    try {
      await axiosApi.post('/employees', bodyRequest)
      setError(null)
      window.location.reload();
      
    } catch (error) {
      
      const {response: {data: {message}, status}} = error

      if(status === 500) {
        const customMessage = 'Houve um erro com sua requisição, tente novamente mais tarde!'
        setError(customMessage)
      } else {
        setError(message)
      }
    }
  }

  
  return (
  <div className={style.modal}>
    <form id="registerForm" className={style.formregister}>
      <h2>
        <FaUserPlus style={{fontSize: "40px", marginRight: "10px"}}/>
        Novo Funcionário
      
      </h2> 
      <div>
        {error && error}
      </div>
      <label>
        Nome:
        <input onChange={({target: {value}}) => setName(value)} type="text" />
      </label>
      <label>
        CPF:
        <input
          onInput={({target: {value, name}}) => setCpf(Masks[name](value))}
          type="text"
          name="cpf"
          value={cpf}
        />
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
        <input
          type="text"
          onInput={({target: {value, name}}) => setWage(Masks[name](value))}
          name="wage"
          value={wage}
        />
      </label>
      <label>
        Data de Nascimento:
        <input
          type="date"
          onChange={({target: {value}}) => setBirthDate(value)}
        />
      </label>
      <button
        type="Button"
        onClick={registerNewEmployee}
        disabled={false}
      >
        <MdAssignmentAdd style={{marginRight: "10px"}} /> Cadastrar
      </button>
      <button
       type="Button"
       onClick={abortEmployeeRegister}
      >
        <MdCancel style={{marginRight: "10px"}}/> Cancelar
      </button>
    </form>
  </div>
  )
}

export default RegisterForm