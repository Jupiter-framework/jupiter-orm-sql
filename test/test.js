var assert = require('chai').assert;

assert(typeof jupiterOrm != undefined, 'You must import jupiterOrm.');
assert(typeof knex != undefined, 'You must include Knex in your code.');
// Use this hack because 'constructor.name' may throw TypeError.
assert(Object.prototype.toString.call(jupiterOrm).slice(8, -1) == 'Object', 'You must import jupiterOrm.');
assert(Object.prototype.toString.call(jupiterOrmSql.cache).slice(8, -1) == 'Object', 'Set cache property to object literal for future usage.');
assert(typeof jupiterOrmSql['Fabric'] == 'function', 'Create Fabric method in adapter.');