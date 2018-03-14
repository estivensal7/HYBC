//Dependencies
const Sequelize = require('sequelize');

//Create MySQL connection using Sequelize
const sequelize = new Sequelize('hybc', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

module.exports = sequelize;