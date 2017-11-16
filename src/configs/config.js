const path = require('path');
let a      = {
    root: path.resolve(__dirname, '../../'),
    src : path.resolve(this.root, 'src'),
};

console.log(a.src);