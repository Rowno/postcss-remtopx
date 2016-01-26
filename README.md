# postcss-remtopx

[![Build Status](https://api.travis-ci.org/Rowno/postcss-remtopx.svg?branch=master)](https://travis-ci.org/Rowno/postcss-remtopx)
[![Dependency Status](https://david-dm.org/Rowno/postcss-remtopx/status.svg)](https://david-dm.org/Rowno/postcss-remtopx)

PostCSS plugin for converting rem to px.


Getting Started
---------------
Install remtopx: `npm install --save-dev postcss-remtopx`

Include remtopx and execute:
```js
var postcss = require('postcss');
var remtopx = require('postcss-remtopx');

var output = postcss([remtopx]).process('body { padding: 2rem; }');
// body { padding: 32px; }
```

Options
-----

```js
var output = postcss([remtopx({ rootFontSize: 14 })]).process('body { padding: 2rem; }');
// body { padding: 28px; }
```

### `rootFontSize`

Type: `float` Default: `16`

Changes the root font size used to calculate the rem pixel values.


License
-------
postcss-remtopx is released under the ISC license.

Copyright © 2016, Roland Warmerdam.
