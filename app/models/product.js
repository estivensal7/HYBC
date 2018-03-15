//Dependencies
// =======================================================
const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

//Creates a 'Product' model that matches up with DB
const Product = sequelize.define('product', {

	routeName: {
		type: Sequelize.STRING
	},
	product_name: {
		type: Sequelize.STRING
	},
	product_kind: {
		type: Sequelize.STRING
	},
	department_name: {
		type: Sequelize.STRING
	},
	price: {
		type: Sequelize.DECIMAL
	},
	stock_quantity: {
		type: Sequelize.INTEGER
	}	
},

	{
		timestamps: false
	});

Product.sync();

module.exports = Product;