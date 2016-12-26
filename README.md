#ECMA Script 2015 (ES 6)

## Install transpiler babel (https://babeljs.io/)

* watch source code folder
    - babel -w es6 -d es5
    - babel -w app-es6.js -o app-es5.js
* install webpack biundler and dependencies
    - npm install --save-dev babel-core babel-loader babel-preset-es2015 webpack webpack-dev-server

* create webpack.config.js to configure entry, output  and module