'use strict';
const got = require('got');
const svg2png = require('svg2png');
const termImg = require('term-img');

module.exports = username => {
	if (!username) {
		return Promise.reject(new Error('username required'));
	}

	got(`https://github.com/users/${username}/contributions`)
		.then(res => {
			return Buffer.from(res.body, 'utf-8');
		})
		.then(svg2png)
		.then(termImg);
};
