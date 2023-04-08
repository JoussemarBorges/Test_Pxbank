import PropTypes from 'prop-types';
import { useEffect, useMemo, useState, useRef } from 'react';
import AppContext from './Context';
import axiosApi from '../Utils/utils';

export default function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [filterDepartment, setFilterDepartment] = useState(0);
  const [employeesTable, setEmployeesTable] = useState([]);
  const [employeeIdToExclude, setEmployeeIdToExclude] = useState(0);  

  const editEmployee = useRef({})

  const getEmployees = async () => {
    const { data } = await axiosApi.get('/employees')

    data.sort(function(a,b){
      if(a.employeeName > b.employeeName) return 1
      if(a.employeeName < b.employeeName) return -1

      return 0;
    })
    setEmployees(data)
    setEmployeesTable(data)

  }

  const getDepartments = async () => {
    const { data } = await axiosApi.get('/departments');
    setDepartments(data)
  }

  useEffect(() => {
    getEmployees()
    getDepartments()
  }, [])


  const context = useMemo(() => ({
    employees,
    setEmployees,
    departments,
    filterDepartment,
    setFilterDepartment,
    editEmployee,
    employeesTable, setEmployeesTable,
    employeeIdToExclude, setEmployeeIdToExclude
  }), [
    employees,
    setEmployees,
    departments,
    filterDepartment,
    setFilterDepartment,
    editEmployee,
    employeesTable, setEmployeesTable,
    employeeIdToExclude, setEmployeeIdToExclude 
  ]);

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

EmployeeProvider.prototype = {
  children: PropTypes.node.isRequired,
}