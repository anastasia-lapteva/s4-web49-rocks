// this is going to inject the config vars inside the .env file
require("dotenv").config();

console.log(process.argv);

const cohort1 = process.argv[2];
const user = process.env.USERDOMAIN;
const shell = process.env.shell;

if (cohort1 === "web-49")
{
    console.log(`${cohort1} rocks!`);
}
else
{
    console.log(`booooh cohort ${cohort1}!`);
}

console.log(`the user is ${user}`);
console.log(`the shell is ${shell}`);

const express = require("express");
const app = express();

app.get("/hello", (req, res) =>
{
    res.json({ message: "hey there" });
});

app.get("/", (req, res) =>
{
    res.send(
        `<h1>Web 49 Rocks!</h1>`
    );
});

const port = process.env.PORT || 9000; // heroku wants to set its own port

app.listen(port, () =>
{
    console.log(`server listening on port ${port}`);
});