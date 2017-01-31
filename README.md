# titleize-props

![Last version](https://img.shields.io/github/tag/Kikobeats/titleize-props.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/titleize-props/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/titleize-props)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/titleize-props.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/titleize-props)
[![Dependency status](https://img.shields.io/david/Kikobeats/titleize-props.svg?style=flat-square)](https://david-dm.org/Kikobeats/titleize-props)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/titleize-props.svg?style=flat-square)](https://david-dm.org/Kikobeats/titleize-props#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/titleize-props.svg?style=flat-square)](https://www.npmjs.org/package/titleize-props)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Capitalize every word in a string prop (excluding links) of a object.

## Install

```bash
$ npm install titleize-props --save
```

## Usage

```js
const titleizeProps = require('titleize-props')

const output = titleizeProps({
  title: 'TITLEIZE PROPS',
  stars: 1337,
  link: 'http://github.com/Kikobeats/titleize-props'
})

console.log(output)
// {
//  title: 'Titleize Props',
//  stars: 1337,
//  link: 'http://github.com/Kikobeats/titleize-props'
// }
//
```

## API

### titleizeProps(obj, [validator])

#### obj

Type: `object`

The object to be titleized.

#### validator(value)

Type: `function`<br>

The method used for calculate each new key value.

The behavior of the default method:

- Exclude non strings values.
- Exclude urls.

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).
