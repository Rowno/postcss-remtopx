'use strict';
const postcss = require('postcss');
const merge = require('lodash.merge');

const DEFAULTS = {
    rootFontSize: 16
};
const REM_REGEX = /([0-9]*\.?[0-9]+)rem/g;


module.exports = postcss.plugin('remtopx', function (opts) {
    const options = merge({}, DEFAULTS, opts);

    function replacePx(match, num) {
        const number = parseFloat(num) * options.rootFontSize;
        return number + 'px';
    }

    return function (css) {
        css.walkDecls(function (decl) {
            if (decl.value.indexOf('rem') === -1) {
                return;
            }

            decl.value = decl.value.replace(REM_REGEX, replacePx);
        });

        css.walkAtRules('media', function (rule) {
            if (rule.params.indexOf('rem') === -1) {
                return;
            }

            rule.params = rule.params.replace(REM_REGEX, replacePx);
        });
    };
});
