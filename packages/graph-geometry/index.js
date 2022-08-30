if (process.env.NODE_ENV === 'development') {
    module.exports = require('./dist/graph-geometry.cjs.js');
} else {
    module.exports = require('./dist/graph-geometry.prod.cjs.js');
}

