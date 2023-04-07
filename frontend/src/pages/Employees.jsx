import React from "react";
import SearchForm from "../components/SearchForm";
import Main from "../components/Main";
import EmployeeTable from "../components/EmployeesTable";

export default function Employees() {
  return (
    <Main>
      <SearchForm />
      <EmployeeTable />
    </Main>
  )
}