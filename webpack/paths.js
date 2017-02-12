const path = require('path');
module.export = function () {
	"use strict";
	return {
		source: path.join(__dirname, 'source'),
		build: path.join(__dirname, 'build')
	};
};