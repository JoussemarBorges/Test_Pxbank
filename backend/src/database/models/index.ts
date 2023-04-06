import { Sequelize } from 'sequelize';
import config from '../config/config';

console.log('config', config);


const options = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[options as keyof object]);

export default sequelize;



