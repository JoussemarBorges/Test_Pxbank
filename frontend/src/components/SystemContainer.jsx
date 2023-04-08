import React from "react";
import SearchForm from "../components/SearchForm";
import EmployeeTable from "../components/EmployeesTable";
import RegisterButton from "../components/RegisterButton";
import RegisterForm from "../components/RegisterForm";
import EditForm from "./EditForm";
import style from '../style/system.module.css'

import { useState } from "react";

export default function SystemContainer() {
  const [toogleVisibRegister, setToggleVisibRegister] = useState(false)
  const [toogleVisibEdit, setToggleVisibEdit] = useState(false)
  return (
    <div className={style.systemContainer}>
      <SearchForm />
      <EmployeeTable
       setToggleVisibEdit={setToggleVisibEdit}
       setToggleVisibRegister={setToggleVisibRegister}
      />
      <RegisterButton
       setToggleVisibRegister={setToggleVisibRegister}
       setToggleVisibEdit={setToggleVisibEdit}
      />
      { toogleVisibRegister && <RegisterForm setToggleVisibRegister={setToggleVisibRegister}/> }
      { toogleVisibEdit && <EditForm setToggleVisibEdit={setToggleVisibEdit}/>}
    </div>
  )
}
