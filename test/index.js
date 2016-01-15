'use strict';
const fs = require('fs');
const path = require('path');

const test = require('ava');
const postcss = require('postcss');
const remtopx = require('..');

let input;


function readFile(file) {
    const filePath = path.join(__dirname, file);

    return new Promise((resolve, reject) => {
        fs.readFile(filePath, { encoding: 'utf8' }, (error, data) => {
            if (error) {
                return reject(error);
            }

            resolve(data);
        });
    });
}


test.before(() => {
    return readFile('fixtures/input.css').then((data) => input = data);
});


test('basic', (t) => {
    t.plan(1);

    return Promise.all([
        postcss([remtopx()]).process(input),
        readFile('fixtures/output1.css'),
    ]).then(([output, fixture]) => t.is(output.css, fixture));
});


test('change root font size', (t) => {
    t.plan(1);

    return Promise.all([
        postcss([remtopx({ rootFontSize: 14 })]).process(input),
        readFile('fixtures/output2.css'),
    ]).then(([output, fixture]) => t.is(output.css, fixture));
});
