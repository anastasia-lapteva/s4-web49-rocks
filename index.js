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
    console.log(`booooh ${cohort1}!`);
}

console.log(`the user is ${user}`);
console.log(`the shell is ${shell}`);