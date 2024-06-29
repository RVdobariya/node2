const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url == "/getData") {
        fs.readFile(`${__dirname}/userData/userData.json`, "utf-8", (err, data) => {
            res.end(data);
            console.log(data);
        });
    }
});
server.listen(7284, "127.0.0.1", () => {
    console.log("OK ok OK ok");
});