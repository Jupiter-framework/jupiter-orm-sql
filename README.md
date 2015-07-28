# jupiter-orm-sql

Sql adapter for Jupiter-orm.

## Install

In CLI:
```bash
npm i --save jupiter-orm-sql
```

In your code:
```javascript
import jupiterOrm from 'jupiter-orm';
import jupiterOrmSql from 'jupiter-orm-sql';

jupiterOrm.typeRegister('psql', jupiterOrmSql);
```

## API

### Constructor

#### .Fabric()

Return new object API. It has method `query` which allows to construct database queries which can be executed by method `exec`.
After that we can chaine to this Promises invocations. Inside `Fabric` we create the connection to database, so after `Fabric` invocation
with the passed in it connection parameters as an object we have ready-to-use adapter to create and execute queries.

### ORM Object

`jupiter-orm-sql` is a extended [knex.js](https://github.com/tgriesser/knex)
library, for single runtime of `jupiter` modlues family.

All methods of `knex.js` there is in `jupiter-orm-sql`.

