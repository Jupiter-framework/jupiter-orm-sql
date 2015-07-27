import jupiterOrm from 'jupiter-orm';

var knex = require('knex'),
	jupiterOrmSql = {};

jupiterOrmSql.cache = {};

jupiterOrmSql.Fabric = function (options) {
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
		this.cache.Fabric = this.Fabric;
		this.cache.exec = jupiterOrm.exec;
		options && this.cache(options);
	}
	
	return this.cache;
};
