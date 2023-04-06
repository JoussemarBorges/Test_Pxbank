import { ModelStatic } from "sequelize";
import Employee from "../database/models/employee";
import IEmployee from "../Interfaces/IEmployee";

class EmployeeService {
model: ModelStatic<Employee> = Employee;

  static async registerEmployee(newEmployeeData: IEmployee): Promise<IEmployee> {
    const newRegister = await Employee.create({...newEmployeeData})

    return newRegister.dataValues;
  }
}

export default EmployeeService;
