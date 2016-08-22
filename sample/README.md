# Sample
Here is a sample about **how to write a basic test and pack it with [browserify](https://github.com/substack/node-browserify)**. It assumed that node,npm has been installed at your local machine.

## Install Browserify
Browserify is used for packing your commonjs modules into a standlone bundle that could be executed in browser.

```
npm install browserify
```

## Pack modules
```
browserify sample/index.js > sample/bundle.js
```

## Test
Now you can open index.html in your modern browser to find interesting stuffs.

