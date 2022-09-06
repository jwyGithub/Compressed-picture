if (process.env.NODE_ENV === 'development') {
    module.exports = require('./dist/graph-register.cjs.js');
} else {
    module.exports = require('./dist/graph-register.prod.cjs.js');
}

