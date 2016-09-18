# Shorthand CLI

![Last version](https://img.shields.io/github/tag/Kikobeats/shorthand-cli.svg?style=flat-square)
[![Dependency status](http://img.shields.io/david/Kikobeats/shorthand-cli.svg?style=flat-square)](https://david-dm.org/Kikobeats/shorthand-cli)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/shorthand-cli.svg?style=flat-square)](https://david-dm.org/Kikobeats/shorthand-cli#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/shorthand-cli.svg?style=flat-square)](https://www.npmjs.org/package/shorthand-cli)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Combine CSS properties into shorthand version when possible.

It converts stylesheet as:

```css
body {
  background-image: url(/img/meow.jpg);
  background-position: top center;
  background-color: #ffffff;
}
```

into short mode if is possible:

```css
body {
  background: url(/img/meow.jpg) top center #fff;
}
```

## Install

```bash
npm install shorthand-cli --global
```

## Usage

```bash
$ shorthand

  Combine CSS properties into shorthand version when possible.

  Usage:
    $ shorthand [file]
    $ cat style.css | shorthand
```

## License

MIT © [Kiko Beats](http://kikobeats.com)
