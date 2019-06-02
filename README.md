# webpack-training
webpack-training

## Start webpack
- The default webpack will run the **webpack.config.js** first to start bundle and start server
- That mean once we run the statement **webpack** webpack will run config file.

## Use Module to transpile another files. EX:
```
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }
  ]
}
```
## The ways to config start server.
1. webpack's Watch Mode
2. webpack-dev-server
3. webpack-dev-middleware (this is used in webpack-dev-server internally)
## Code Splitting
Te default of webpack build it's will be bundle all things was inport into the entry point. => This can be duplicate the module which was import in 2 place.
To resolve this problem we can use SplitChunksPlugin to prevent the duplicate.
Otherwise, We also use dynamic import to resolve this issue.
Ưebpack also supportted the prefetching and preloading to repare the resources and announce the change for browser.
The refer link for this https://webpack.js.org/guides/code-splitting
