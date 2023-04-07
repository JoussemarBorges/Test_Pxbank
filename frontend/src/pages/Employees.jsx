import React from "react";
import SearchForm from "../components/SearchForm";
import Main from "../components/Main";
import EmployeeTable from "../components/EmployeesTable";
import RegisterButton from "../components/RegisterButton";
import RegisterOrUpdateForm from "../components/RegisterOrUpdateForm";

export default function Employees() {
  return (
    <Main>
      <SearchForm />
      <EmployeeTable />
      <RegisterButton />
      <RegisterOrUpdateForm />
    </Main>
  )
}