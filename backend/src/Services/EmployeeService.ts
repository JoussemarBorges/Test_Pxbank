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

  static async getAllEmployees(): Promise<IEmployee[] | null> {
    const allEmployees: IEmployee[] = await Employee.findAll({raw: true}) as unknown as IEmployee[];

    return allEmployees;
  }

  static async updateEmployee(employeeData: IEmployee): Promise<number>{
    const [affectedCount] = await Employee.update({...employeeData}, {where: {id: employeeData.id}});

    return affectedCount;
  }

  static async deleteEmployeeByID(id: number): Promise<number | null> {
    const result = await Employee.destroy({where: {id}});

    return result;
  }
}

export default EmployeeService;
