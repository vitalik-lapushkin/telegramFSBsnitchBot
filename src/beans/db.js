const Pool = require('pg');
const dbOptions = require('../configs/dbOptions');

const pool = new Pool(dbOptions);

modelu.exports = pool;