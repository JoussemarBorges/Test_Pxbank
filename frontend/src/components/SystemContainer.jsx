import React from "react";
import SearchForm from "../components/SearchForm";
import EmployeeTable from "../components/EmployeesTable";
import RegisterButton from "../components/RegisterButton";
import RegisterForm from "../components/RegisterForm";
import EditForm from "./EditForm";

import { useState } from "react";

export default function SystemContainer() {
  const [toogleVisibRegister, setToggleVisibRegister] = useState(false)
  const [toogleVisibEdit, setToggleVisibEdit] = useState(false)
  return (
    <>
      <SearchForm />
      <EmployeeTable setToggleVisibEdit={setToggleVisibEdit}/>
      <RegisterButton setToggleVisibRegister={setToggleVisibRegister}/>
      { toogleVisibRegister && <RegisterForm setToggleVisibRegister={setToggleVisibRegister}/> }
      { toogleVisibEdit && <EditForm setToggleVisibEdit={setToggleVisibEdit}/>}
    </>
  )
}
