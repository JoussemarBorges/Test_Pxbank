import { ModelStatic } from "sequelize"; 'sequelize'
import Employee from "../database/models/employee";
import IEmployee from "../Interfaces/IEmployee";

class EmployeeService {
model: ModelStatic<Employee> = Employee;

  async registerEmployee(newEmployeeData: IEmployee): Promise<IEmployee> {
    const newRegister = await this.model.create({...newEmployeeData})

    return newRegister.dataValues;
  }
}

export default EmployeeService;
