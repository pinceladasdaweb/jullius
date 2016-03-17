# jullius
> Light weight library to manage JSONP calls using Promises

## Install

With npm

```sh
npm install jullius --save
```

## Download

You can download the latest version or checkout all the releases [here](https://github.com/pinceladasdaweb/jullius/releases).

## How to use?

If you know how Promises in JavaScript work and what is a JSONP call, then you don't need much else.

Require the package or use the global `jullius` namespace and passing a *url*, pipe a `then` statement to handle the data you've received and `catch` just in case something goes wrong.

### JavaScript
```html
<script src="path/to/jullius.min.js"></script>
<script>
jullius('http://www.pinceladasdaweb.com.br/blog/', {
    json: 'get_recent_posts',
    count: 5
})
.then(function(data) {
    console.dir(data);
})
.catch(function(e) {
    console.error(e);
});
</script>
```

### commonJS
```js
var jullius = require('jullius');
```

### ES6
```js
import jullius from 'jullius';
```

##Options
* url: (string) (required) URL for the JSONP resource.
* params: (object) (optional) Object used to generate GET query parameters for the JSONP resource.

##Browser Support

![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

Since this library relies on Promises remember to include a polyfill for browsers which don't support this feature. I recommend this one [es6-promise](https://github.com/jakearchibald/es6-promise) developed by Jake Archibald.

## Contributing

Check [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/pinceladasdaweb/jullius/releases) for detailed changelog.

## License
[MIT](LICENSE)
