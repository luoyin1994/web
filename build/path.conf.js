const r = require('path').resolve;

const root = r(__dirname, '../');

// dev directory
const src    = r(root, 'src');
const views  = r(root, src, 'views');
const assets = r(src, 'assets');

// prod directory
const dist = r(root, 'dist');
const dev  = r(root, 'dev');

module.exports = {
    root,
    src,
    views,
    dist,
    dev,
    assets,
};
