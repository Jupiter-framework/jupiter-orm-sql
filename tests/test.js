import { expect, assert } from 'chai';
import { Fabric } from '../src/jupiter-orm-sql';

const testFabric = Fabric({}),
	   testQuery = testFabric.query(),
	   toStringFromObj = Object.prototype.toString;
	   

describe('Fabric() method in Adapter', function () {
	it('Return API object', function () {
		assert(toStringFromObj.call(testFabric).slice(8, -1) == 'Object', 'Fabric() method must return an object.');
	});
});