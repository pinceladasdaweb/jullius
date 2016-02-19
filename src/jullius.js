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

    var jullius = function(url) {
        return new Promise(function(resolve, reject) {
            if (typeof url !== 'string') {
                reject('You need pass a valid url!!!');
            }

            var name = 'jullius_' + Math.round(100000000000 * Math.random()), head, script, extScript;

            head           = document.head || document.getElementsByTagName('head')[0];
            extScript      = document.createElement('script');
            extScript.type = 'text/javascript';

            script       = extScript.cloneNode();
            script.src   = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + name;
            script.async = true;

            head.appendChild(script);

            window[name] = function (data) {
                resolve(data);

                try {
                    delete window[name];
                } catch(e) {
                    window[name] = undefined;
                }
            }

            script.addEventListener('error', reject);
        });
    };

    return jullius;
}));