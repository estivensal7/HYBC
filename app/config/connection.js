//Dependencies
const Sequelize = require('sequelize');

//Create MySQL connection using Sequelize
const sequelize = new Sequelize('hybc', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql',
	port: 3306,
	pool: {
		max: 5,
		min: 0,
		idle: 12000
	}
});

module.exports = sequelize;