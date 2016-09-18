#!/usr/bin/env node

'use strict'

var concat = require('concat-stream')
var pkg = require('../package.json')
var shrthnd = require('shrthnd')
var path = require('path')
var fs = require('fs')

require('update-notifier')({pkg: pkg}).notify()

var cli = require('meow')({
  pkg: pkg,
  help: fs.readFileSync(path.resolve(__dirname, 'help.txt'), 'utf8')
})

var file = cli.input[0]
var stream = file ? fs.createReadStream(file) : process.stdin

function shorthand (style) {
  var short = shrthnd(style).string
  process.stdout.write(short)
}

var concatStream = concat({encoding: 'string'}, shorthand)
stream.pipe(concatStream)
