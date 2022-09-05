if (process.env.NODE_ENV === 'development') {
    module.exports = require('./dist/graph-draw.cjs.js');
} else {
    module.exports = require('./dist/graph-draw.prod.cjs.js');
}

