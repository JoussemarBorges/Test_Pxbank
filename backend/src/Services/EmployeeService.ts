// import { ModelStatic } from "sequelize";
import Employee from "../database/models/employee";
import IEmployee from "../Interfaces/IEmployee";

class EmployeeService {

  static async registerEmployee(newEmployeeData: IEmployee): Promise<IEmployee | null> {
    const {dataValues} = await Employee.create({...newEmployeeData});

    const employeeRegistered = dataValues;

    return employeeRegistered
  }

  static async getAllEmployees() {
    const allEmployees = await Employee.findAll();

    return allEmployees;
  }
}

export default EmployeeService;
