if (process.env.NODE_ENV === 'development') {
    module.exports = require('./dist/graph-event.cjs.js');
} else {
    module.exports = require('./dist/graph-event.prod.cjs.js');
}

