# hello-typescript-react-ssr

To install dependencies
```
yarn install
```

To build project
```
yarn gulp
```
Runs gulp default task through node_modules/.bin/gulp.
Output is written to ./build

Run server with
```
node build/server.js
```
Runs webserver on localhost:8080
Serves server-side rendered React app from /build/static/client.js
