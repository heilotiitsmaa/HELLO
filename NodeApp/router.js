const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",      
    user: "root",           
    password: "password123",
    database: "example_db"  
});

// Test the database connection
db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to MySQL Database!");
});

// Simple query example (e.g., fetching users)
function fetchUsers(req, res) {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "Database query failed" }));
        } else {
            res.statusCode = 200;
            res.end(JSON.stringify(results));
        }
    });
}

// Export function to your routes
module.exports = { fetchUsers };
