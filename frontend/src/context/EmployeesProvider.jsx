import PropTypes from 'prop-types';
import { useEffect, useMemo, useState, useRef } from 'react';
import AppContext from './Context';
import axiosApi from '../Utils/utils';

export default function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [filterDepartment, setFilterDepartment] = useState(0);
  

  const editEmployee = useRef({})

  const getEmployees = async () => {
    const { data } = await axiosApi.get('/employees')
    setEmployees(data)
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
   
  }), [
    employees,
    setEmployees,
    departments,
    filterDepartment,
    setFilterDepartment,
    editEmployee,
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