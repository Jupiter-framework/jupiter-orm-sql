import { Promise } from 'es6-promise';

var jupiterOrmSql = require('knex');


export function Fabric(options) {
	const query = {};
	
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
		
			
	};
	
	return jupiterOrmSql;
}