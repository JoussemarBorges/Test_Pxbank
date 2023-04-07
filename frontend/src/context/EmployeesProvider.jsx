import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import AppContext from './Context';

export default function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [filterDepartment, setFilterDepartment] = useState(0);


  const getEmployees = async () => {
    const api = axios.create({baseURL: 'http://localhost:3001'})

    const { data } = await api.get('/employees')

    setEmployees(data)
  }

  const getDepartments = async () => {
    const api = axios.create({baseURL: 'http://localhost:3001'})
    
    const { data } = await api.get('/departments');
    
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
    setFilterDepartment
  }), [
    employees,
    departments,
    filterDepartment,
    setFilterDepartment
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