'use strict';
var postcss = require('postcss');
var merge = require('lodash.merge');

var DEFAULTS = {
    rootFontSize: 16
};
var REM_REGEX = /([0-9]*\.?[0-9]+)rem/g;


module.exports = postcss.plugin('remtopx', function (opts) {
    var options = merge({}, DEFAULTS, opts);

    function replacePx(match, num) {
        var number = parseFloat(num) * options.rootFontSize;
        return number + 'px';
    }

    return function remtopx(css) {
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
