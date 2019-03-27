# babel-plugin-import-less-css

babel转码中使用import("./index.less")修改为require("./index.css")

[![npm version](https://img.shields.io/npm/v/babel-plugin-import-less-css.svg)](https://www.npmjs.com/package/babel-plugin-import-less-css)
[![NPM downloads](http://img.shields.io/npm/dt/babel-plugin-import-less-css.svg?style=flat)](https://npmjs.org/package/babel-plugin-import-less-css)

## 安装

```bash
$ npm install babel-plugin-import-less-css -D
```

## 使用

修改 `.babelrc`

```json
{
	"presets": [],
	"plugins": [
		"import-less-css"
	]
}
```

