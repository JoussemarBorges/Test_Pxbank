// import { ModelStatic } from "sequelize";
import { AffectedFileResult } from "typescript";
import Department from "../database/models/department";
import Employee from "../database/models/employee";

import IEmployee from "../Interfaces/IEmployee";

class EmployeeService {

  static async registerEmployee(newEmployeeData: IEmployee): Promise<IEmployee | null> {

    const {departmentId} = newEmployeeData;
    const isDepatmentExists = await Department.findByPk(departmentId);

    if(!isDepatmentExists) return isDepatmentExists;

    const {dataValues} = await Employee.create({...newEmployeeData});
    const employeeRegistered = dataValues;
    return employeeRegistered
  }

  static async getAllEmployees(){
    const allEmployees = await Employee.findAll({
      include: [
        {model: Department, as: 'department'}
      ]
    });

    return allEmployees;
  }

  static async updateEmployee(employeeData: IEmployee): Promise<number | object>{
    const {id, departmentId} = employeeData;

    const isValidId = await Employee.findByPk(id);    
    if(!isValidId) return {message: 'O id do funcionário informado é inválido'}

    const isDepatmentExists = await Department.findByPk(departmentId);
    if(!isDepatmentExists) return {message: 'O Id do departamento informado é inválido'}

    const [affectedCount] = await Employee.update({...employeeData}, {where: {id: employeeData.id}});

    if(affectedCount === 0) return {message: 'Nenhum dado foi atualizado'}

    return affectedCount;
  }

  static async deleteEmployeeByID(id: number): Promise<number | null> {
    const result = await Employee.destroy({where: {id}});

    return result;
  }
}

export default EmployeeService;
