const path = require('path');

const root = path.resolve(__dirname, '../');

// dev directory
const src   = path.resolve(root, 'src');
const views = path.resolve(root, src, 'views');

// prod directory
const dist = path.resolve(root, 'dist');

module.exports = {
    root,
    src,
    views,
    dist,
};
