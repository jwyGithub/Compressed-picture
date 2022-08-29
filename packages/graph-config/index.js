if (process.env.NODE_ENV === 'development') {
    module.exports = require('./dist/graph-config.cjs.js');
} else {
    module.exports = require('./dist/graph-config.prod.cjs.js');
}

