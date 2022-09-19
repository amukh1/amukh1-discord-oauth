[![npm version](https://badge.fury.io/js/amukh1-discord-oauth.svg)](https://www.npmjs.com/package/amukh1-discord-oauth)

# amukh1-discord-oauth

> Making discord oauth *easier*.

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Getting Started


## Installation
<br>

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

<br>

To install and set up the library, run:

```sh
$ npm install amukh1-discord-oauth
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev amukh1-discord-oauth
```

## Usage

### First, Start by importing the library

```js
var oauth = require('amukh1-discord-oauth');
```
<br>

## Functions

### getToken
```js
oauth.getToken({
    client_id: '123',
    client_secret: '123',
    code: '123',
    redirect_uri: 'https://123.456'
}).then(data => {
    console.log(data)
})
```
<br>

### getUser
```js
oauth.getUser({
    access_token: "123"
}).then(data => {
    console.log(data)
})
```

### Serving the app

```sh
$ npm start
```

## Contributing

You can contribute to the project by making a pull request on [GitHub](https://github.com/amukh1-discord-oauth).

# Credits

## Amukh1.

## Built With

* [Node](https://nodejs.org/)
* [Discord](https://discord.gg)
* [Express](https://expressjs.com)
* [Love](https://amukh1.dev)

## Authors

* **Amukh1** - [Github](https://github.com/amukh1)

See also the list of [contributors](https://github.com/amukh1/amukh1-discord-oauth/contributors) who participated in this project.

## License

[MIT License](https://mit-license.org/2022) © Amukh1