module.exports = function (source) {
	source = source.replace(/return \(([\s\S]*?)\)/g, 'return (`$1`)')
	
	source.match(/import ([\w]+) from/g)?.map(match => {
		const component = match.replace('import ', '').split(' ')[0]
		source = source.replace(new RegExp('<' + component, 'g'), '<x-alpine alpine:component="' + component + '"')
		source = source.replace(new RegExp('<\\/' + component + '>', 'g'), '</x-alpine>')
	})

	return source
}