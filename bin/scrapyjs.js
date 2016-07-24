#!/usr/bin/env node
var program = require('commander');
var fs = require('fs');

program
    .arguments('<action>, <projectname>')
    .action(action)
    .parse(process.argv);


function action (action, projectname) {
    let directoryExists = fs.existsSync(projectname);
    if(directoryExists) {
        return console.warn(`Error: Directory '${projectname}' already exists`);
    }
    console.log('lets doit');
}