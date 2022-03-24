import Core from 'alpinejs'
import { uniqid } from './tools'

const Alpine = {
	components: {
		// 
	},
	component(name, callback) {
		if (!this.components[name]) {
			const id = uniqid()
			this.components[name] = { id, callback }
			Core.data(id, callback)
		}
	},
	render(rootComponent, target) {
		target.setAttribute('x-data', this.components[rootComponent].id)
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

		const name = this.getAttribute('alpine:component')
		const element = document.createElement('div')

		element.setAttribute('x-data', Alpine.components[name].id)
		element.setAttribute('x-html', 'template')

		element.__children = this.innerHTML.trim()
		element.__props = {}

		Array.from(element.attributes).map(attribute => {
			if (attribute.nodeName.indexOf('alpine:') === -1) {
				element.__props[attribute.nodeName] = attribute.nodeValue
			}
		})

		this.replaceWith(element)
	}
})

export default Alpine