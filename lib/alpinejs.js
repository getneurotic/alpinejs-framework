import Core from 'alpinejs'

const Alpine = {
	components: {
		// 
	},
	component(name, data) {
		this.components[name] = data
		return data
	},
	render(rootComponent, target) {
		target.innerHTML = this.components[rootComponent]?.render()
		Core.start()
	},
}

customElements.define('x-alpine', class extends HTMLElement {
	connectedCallback() {
		const id = this.getAttribute('alpine:id')
		const component = this.getAttribute('alpine:component')
		const slotRegExp = new RegExp(/<slot>([\s\S]*?)<\/slot>/g)

		let data = Alpine.components[component]

		Array.from(this.attributes).map(attribute => {
			if (attribute.nodeName.indexOf('alpine:') !== -1) {
				data[attribute.nodeName] = attribute.nodeValue
			}
		})
		
		let render = data.render()

		if (render.match(slotRegExp)) {
			const slot = this.innerHTML.trim()
			const fallback = (Array.from(render.matchAll(slotRegExp))
				.map(match => match[1])[0] ?? '').trim()

			render = render.replace(slotRegExp, slot.length ? slot : fallback)
		}

		Core.data(id, () => (data))

		this.innerHTML = render
		this.firstElementChild.setAttribute('x-data', id)
		this.replaceWith(this.firstElementChild)
	}
})

export default Alpine