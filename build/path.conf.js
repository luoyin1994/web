const r = require('path').resolve;

const root         = r(__dirname, '../');
const node_modules = r(root, 'node_modules');
// dev directory
const dev          = r(root, 'dev');
const src          = r(root, 'src');
const assets       = r(src, 'static/assets');

// prod directory
const dist = r(root, 'dist');

module.exports = {
    root,
    src,
    dist,
    dev,
    assets,
    node_modules
};
