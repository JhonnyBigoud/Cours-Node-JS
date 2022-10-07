const fs = require('fs');

// ----

let json ="{\"name\":\"john\",\"age\":32}";

fs.writeFileSync('test.txt',"Hello There", "utf8");

// fs.writeFileSync = fs.readFileSync('test.tst');

let content = fs.readFileSync('test.txt', "utf8");

console.log(content);

fs.writeFileSync('test.txt', `${content}\nHello John`);
// backslash \n = saut de ligne. backslash \t = tabulation
fs.writeFileSync('test.txt', "Hello Bob");

content = fs.readFileSync('test.txt', "utf8");

fs.writeFileSync('test.txt', `${content}\Hello Bob`);


let data = "Hello There\nHello Bob";
fs.writeFileSync('test2.txt', data);