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