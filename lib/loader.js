const { kebabize, uniqid } = require('./tools')

module.exports = function (source) {
	source = source.replace(/return \(([\s\S]*?)\)/g, 'return (`$1`)')

	source.match(/import ([\w]+) from/g)?.map(match => {
		const component = match.replace('import ', '').split(' ')[0]
		const element = kebabize(component)
		const id = uniqid()

		source = source.replace(new RegExp('<' + component, 'g'), '<x-alpine alpine:id="' + id + '" alpine:component="' + component + '"')
		source = source.replace(new RegExp('<\\/' + component + '>', 'g'), '</x-alpine>')
	})

	return source
}