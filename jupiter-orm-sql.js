var knex = require('knex')({
	client: 'mysql',
	connection: {
		host     : '127.0.0.1',
		user     : 'your_database_user',
		password : 'your_database_password',
		database : 'myapp_test'
	}
});

knex.cache = {};

knex.Fabric = function () {
	'use strict';
	
	var hasOwnProperty,
		prop;
		
	if (Object.getOwnPropertyNames(obj).length == 0) {
		hasOwnProperty = Object.prototype.hasOwnProperty;
		for (prop in this) {
			if (hasOwnProperty.call(this, prop)) {
				this.cache[prop] = this[prop];
			}
		}
	}
	
	return this.cache;
};