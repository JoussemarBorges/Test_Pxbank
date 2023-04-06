import { Model, DataTypes } from 'sequelize';
import db from '.'

  class Departament extends Model {}
  Departament.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    departamentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  }, {
    sequelize: db,
    modelName: 'Departament',
    underscored: true
  });

  export default Departament;