if (process.env.NODE_ENV === 'development') {
    module.exports = require('./dist/graph-mixin.cjs.js');
} else {
    module.exports = require('./dist/graph-mixin.prod.cjs.js');
}

