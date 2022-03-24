import Core from 'alpinejs'
import _ from 'lodash'

const Alpine = {
	components: {
		// 
	},
	component(name, callback) {
		if (!this.components[name]) {
			this.components[name] = callback
			Core.data(name, callback)
		}
		return callback
	},
	render(rootComponent, target) {
		target.setAttribute('x-data', rootComponent)
		target.setAttribute('x-html', 'template')
		return this
	},
	start() {
		Core.magic('props', (el) => el.closest('[x-data]').__props)
		Core.magic('children', (el) => el.closest('[x-data]').__children)
		Core.start()
	}
}

customElements.define('x-alpine', class extends HTMLElement {
	constructor() {
		super()

		const component = this.getAttribute('alpine:component')
		const element = document.createElement('div')
		
		element.setAttribute('x-data', component)
		element.setAttribute('x-html', 'template')
		element.__children = this.innerHTML.trim()
		element.__props = getElementAttributes(this)

		this.replaceWith(element)
	}
})

function getElementAttributes(element) {
	const attributes = {}
	
	Array.from(element.attributes).map(attribute => {
		if (attribute.nodeName.indexOf('alpine:') === -1) {
			attributes[attribute.nodeName] = attribute.nodeValue
		}
	})

	return attributes
}

export default Alpine