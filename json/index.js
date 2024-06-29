const fs = require("fs");
const { json } = require("express/lib/response");

const name = {
    name: "Ravi",
    age: 25,
    company: "rejoice",
    birth: true
};

console.log(name.company);
const jsondata = JSON.stringify(name);
console.log(jsondata);
const data = JSON.parse(jsondata);
console.log(data);

fs.writeFile("node.json", jsondata, (err) => {
    console.log("done");
});

fs.readFile("node.json", "utf-8", (err, data) => {
    console.log(data);
});