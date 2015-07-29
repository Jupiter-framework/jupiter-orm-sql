import { Promise } from 'es6-promise';

var jupiterOrmSql = require('knex');


export function Fabric(options) {
	
	jupiterOrmSql = {
		/**
		 *	Connect to database.
		 */
		connect (options) {
			return jupiterOrmSql({
				client: 'mysql',
				connection: options
			});
		},
		/**
		 *	Construct queries to database.
		 */
		query () {
			var requestObject = {};
		
			requestObject.exec = function () {
			
			};
		
			return requestObject;
		}
		
	}
	
	return jupiterOrmSql.connect(options);
}