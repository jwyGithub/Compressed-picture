if (process.env.NODE_ENV === 'development') {
    module.exports = require('./dist/graph-shared.cjs.js');
} else {
    module.exports = require('./dist/graph-shared.prod.cjs.js');
}

