# test-webapp

Super simple shell for a web app using of the usual suspects (React/Express/Webpack/Eslint/Mocha).

Fork to spin up a simple web app using React quickly.

```
$ git clone https://github.com/brett-hobbs/simple-web-app

$ npm install

$ npm build

$ npm run test
> mocha --opts mocha.opts
  Test stub
    ✓ returns hello word
  1 passing (12ms)

$ npm run lint
> eslint *.js

$ npm start
> node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --content-base ./
Project is running at http://localhost:8080/
...
```
