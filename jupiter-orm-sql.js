import jupiterOrm from 'jupiter-orm';
import jupiterOrmSql from 'jupiter-orm-sql';
jupiterOrm.typeRegister('psql', jupiterOrmSql);

/*
var knex = require('knex')({
	client: 'mysql',
	connection: {
		host     : '127.0.0.1',
		user     : 'your_database_user',
		password : 'your_database_password',
		database : 'myapp_test'
		}
	});
*/

var knex = require('knex');

jupiterOrmSql.cache = {};

jupiterOrmSql.Fabric = function () {
	'use strict';
	
	var hasOwnProperty,
		prop;
		
	if (Object.getOwnPropertyNames(this.cache).length == 0) {
		hasOwnProperty = Object.prototype.hasOwnProperty;
		for (prop in knex) {
			if (hasOwnProperty.call(knex, prop)) {
				this.cache[prop] = knex[prop];
			}
		}
	}
	
	return this.cache;
};