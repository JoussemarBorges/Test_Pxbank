import { ModelStatic } from "sequelize";
import Employee from "../database/models/employee";
import IEmployee from "../Interfaces/IEmployee";

class EmployeeService {
model: ModelStatic<Employee> = Employee;

  static async registerEmployee(newEmployeeData: IEmployee): Promise<IEmployee[] | null> {
    // const newRegister = await Employee.create({...newEmployeeData});

    const newRegister = await Employee.findAll();

    return newRegister;
  }
}

export default EmployeeService;
