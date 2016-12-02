# Sample
Here is a sample about **how to write a basic test and pack it with [browserify](https://github.com/substack/node-browserify)**. It assumed that node,npm has been installed at your local machine.

## Install Browserify
Browserify is used for packing your commonjs modules into a standlone bundle that could be executed in browser.

```
npm install browserify -g
```

## Pack modules
```
browserify --debug index.js > bundle.js
```

## Touble shooting
* [Failed to mount component: template or render function not defined. (found in root instance)]
  (https://github.com/vuejs/vue-router/issues/713)

## Test
Now you can open index.html in your modern browser to find interesting stuffs.

