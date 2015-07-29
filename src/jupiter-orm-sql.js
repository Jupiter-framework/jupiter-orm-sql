import { Promise } from 'es6-promise';

var jupiterOrmSql = require('knex');


export function Fabric(options) {
	/**
	 *	Connect to database.
	 */
	function connect() {
		return jupiterOrmSql({
			client: 'mysql',
			connection: options
		});
	}
	
	/**
	 *	Construct queries to database.
	 */
	jupiterOrmSql.query = function () {
		var requestObject = {};
		
		requestObject.exec = function () {};
		
		return requestObject;
	};
	
	return jupiterOrmSql;
}