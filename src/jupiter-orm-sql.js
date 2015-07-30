import { Promise } from 'es6-promise';

var jupiterOrmSql = require('knex');

export function Fabric(options) {
	var adapter = connect();
	/**
	 * Connect to database.
	 */
	function connect() {
		return jupiterOrmSql({
				client: 'mysql',
				connection: options
			});
	}
	
	/**
	 * Construct queries to database.
	 */
	adapter.query = () => {
		
		var requestObject = {},
			queries = [];
	
		requestObject.exec = function () {
			queries.reduce((previousValue, currentValue, index, array) => {
				
			}, Promise.resolve(null));
		};
	
		return requestObject;
		
	};
	
	return adapter;
}