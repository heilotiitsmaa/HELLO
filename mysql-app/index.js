const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost', // Replace with your cPanel database host
  user: 'vs24tiitsmaa', // Replace with your cPanel database username
  password: ',!PGgmCAScqZ', // Replace with your cPanel database password
  database: 'vs24tiitsmaa_AB' // Replace with your cPanel database name
});

async function queryDatabase() {
    const connection = await pool.getConnection();
  
    try {
      const rows = await connection.query('SELECT * FROM RAAMATUD');
      console.log(rows);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      connection.release();
    }
  }
  
  queryDatabase();