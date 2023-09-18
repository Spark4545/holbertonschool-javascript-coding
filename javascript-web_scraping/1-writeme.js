#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];
const content = process.argv[3];

fs.writefile(filepath, content, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
