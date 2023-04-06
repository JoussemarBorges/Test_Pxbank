// import { ModelStatic } from "sequelize";
import Employee from "../database/models/employee";
import IEmployee from "../Interfaces/IEmployee";

class EmployeeService {

  static async registerEmployee(newEmployeeData: IEmployee): Promise<IEmployee | null> {
    const {dataValues} = await Employee.create({...newEmployeeData});

    const employeeRegistered = dataValues;

    return employeeRegistered
  }

  static async getAllEmployees(): Promise<IEmployee[]> {
    const allEmployees: IEmployee[] = await Employee.findAll({raw: true}) as unknown as IEmployee[];

    return allEmployees;
  }

  static async updateEmployee(employeeData: IEmployee) {
    const result = await Employee.update({...employeeData}, {where: {id: employeeData.id}});

    return result;
  }
}

export default EmployeeService;
