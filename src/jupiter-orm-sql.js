import { Promise } from 'es6-promise';

var jupiterOrmSql = require('knex');


export function Fabric(options) {
	const query = {};
	
	function connect() {
		return jupiterOrmSql({
			client: 'mysql',
			connection: options
		});
	}
	return jupiterOrmSql;
}