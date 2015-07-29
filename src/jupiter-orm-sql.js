import { Promise } from 'es6-promise';

var jupiterOrmSql = require('knex');


export function Fabric(options) {
	
	jupiterOrmSql = {
		/**
		 * Connect to database.
		 */
		connect (options) {
			return jupiterOrmSql({
				client: 'mysql',
				connection: options
			});
		},
		/**
		 * Construct queries to database.
		 */
		query () {
			var requestObject = {},
				queries = [];
		
			requestObject.exec = function () {
				queries.reduce((previousValue, currentValue, index, array) => {
					
				}, Promise.resolve(null));
			};
		
			return requestObject;
		}
		
	}
	
	return jupiterOrmSql.connect(options);
}