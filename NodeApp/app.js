const http = require("http");
const { fetchUsers, addUser } = require("./router"); 

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/users" && req.method === "GET") {
        fetchUsers(req, res);
    } else if (req.url === "/add-user" && req.method === "POST") {
        addUser(req, res);
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});

server.listen(3000, "10.15.16.195", () => {
    console.log("Server running at http://10.15.16.195:3000/");
});

