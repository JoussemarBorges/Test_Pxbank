// import { ModelStatic } from "sequelize";
import Department from "../database/models/department";
import IDepatarment from "../Interfaces/IDepartament";

class DepartmentService {

  static async create(newDepartmentData: IDepatarment): Promise<IDepatarment | null> {
    const {dataValues} = await Department.create({...newDepartmentData});

    const departamentCreated = dataValues;

    return departamentCreated;
  }

  static async getAllDepartments() {
    const departments = await Department.findAll();
    
    return departments;
  }
}

export default DepartmentService;