const r = require('path').resolve;

const root       = r(__dirname, '../');
const logoIcon   = r(__dirname, 'logo.png');
// dev directory
const dev        = r(root, 'dev');
const src        = r(root, 'src');
const views      = r(root, src, 'views');
const assets     = r(src, 'static/assets');
const components = r(views, 'components');
// prod directory
const dist       = r(root, 'dist');

module.exports = {
    root,
    src,
    views,
    dist,
    dev,
    assets,
    components,
    logoIcon,
};
