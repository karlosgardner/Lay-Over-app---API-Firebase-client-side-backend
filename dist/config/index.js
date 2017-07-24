'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nconf = require('nconf');

var _nconf2 = _interopRequireDefault(_nconf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nconf2.default.argv().env({ lowerCase: true });
_nconf2.default.file('local', __dirname + '/local.json');
_nconf2.default.file('environment', __dirname + '/' + _nconf2.default.get('NODE_ENV') + '.json');
_nconf2.default.file('base', __dirname + '/base.json');
_nconf2.default.load();

exports.default = _nconf2.default;