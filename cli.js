#!/usr/bin/env node
'use strict';
const meow = require('meow');
const githubKusa = require('./');

const cli = meow(`
	Usage
	  $ github-kusa [username]

	Examples
	  $ github-kusa akameco
`);

const username = cli.input[0];

if (username) {
	githubKusa(username);
} else {
	console.log('username required');
}
