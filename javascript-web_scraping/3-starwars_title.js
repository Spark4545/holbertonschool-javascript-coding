#!/usr/bin/node

const request = require('request');

const movieID = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieID}`;

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const film = JSON.parse(body);
    console.log(film.title);
  }
});
