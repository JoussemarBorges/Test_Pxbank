import React from "react";
import SearchForm from "../components/SearchForm";
import EmployeeTable from "../components/EmployeesTable";
import RegisterButton from "../components/RegisterButton";
import RegisterForm from "../components/RegisterForm";
import EditForm from "./EditForm";
import AlertForm from "./AlertForm"
import style from '../style/system.module.css'

import { useState } from "react";

export default function SystemContainer() {
  const [toogleVisibRegister, setToggleVisibRegister] = useState(false)
  const [toogleVisibEdit, setToggleVisibEdit] = useState(false)
  const [toogleVisibAlert, setToggleVisibAlert] = useState(false)
  return (
    <div className={style.systemContainer}>
      <SearchForm />
      <EmployeeTable
       setToggleVisibEdit={setToggleVisibEdit}
       setToggleVisibRegister={setToggleVisibRegister}
       setToggleVisibAlert={setToggleVisibAlert}
      />
      <RegisterButton
       setToggleVisibRegister={setToggleVisibRegister}
       setToggleVisibEdit={setToggleVisibEdit}
      />
      { 
        toogleVisibRegister && 
          <RegisterForm setToggleVisibRegister={setToggleVisibRegister}/>
      }
      { 
        toogleVisibEdit && 
          <EditForm setToggleVisibEdit={setToggleVisibEdit}/>
      }
      { 
        toogleVisibAlert && 
          <AlertForm
            setToggleVisibAlert={setToggleVisibAlert}
            setToggleVisibRegister={setToggleVisibRegister}
            setToggleVisibEdit={setToggleVisibEdit}
          />
      }
    </div>
  )
}
