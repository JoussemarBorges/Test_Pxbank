import { Model, DataTypes } from 'sequelize';
import db from '.'


  class Department extends Model {}
  Department.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    departmentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  }, {
    sequelize: db,
    modelName: 'Department',
    underscored: true,
    timestamps: false,
  });
  

  export default Department;