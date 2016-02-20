(function (root, factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.jullius = factory();
    }
}(this, function () {
    'use strict';

    var generateCallback = function () {
        return 'jullius_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
    };

    var clearFunction = function (fn) {
        try {
            delete window[fn];
        } catch (e) {
            window[fn] = undefined;
        }
    };

    var removeScript = function (id) {
        var script = document.getElementById(id);
        script.parentNode.removeChild(script);
    };

    var buildQuery = function (params) {
        var query = '', key;

        for (key in params) {
            if(params.hasOwnProperty(key)) {
                 query += encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) + "&"
            }
        };

        return query;
    };

    var jullius = function(url, params) {
        return new Promise(function(resolve, reject) {
            if (typeof url !== 'string') {
                reject('You need pass a valid url!!!');
            }

            var name = generateCallback(), head, script, extScript;

            head           = document.head || document.getElementsByTagName('head')[0];
            extScript      = document.createElement('script');
            extScript.type = 'text/javascript';

            script       = extScript.cloneNode();
            script.src   = url + (url.indexOf('?') >= 0 ? '&' : '?') + buildQuery(params) + 'callback=' + name;
            script.id    = name;
            script.async = true;

            head.appendChild(script);

            window[name] = function (data) {
                resolve(data);
                clearFunction(name);
            }

            removeScript(name);

            script.addEventListener('error', reject);
        });
    };

    return jullius;
}));