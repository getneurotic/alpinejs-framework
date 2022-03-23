import Alpine from "../lib/alpinejs"

export default Alpine.createComponent('Layout', {
	render() {
		return (
			<div class="flex items-center justify-center w-full min-h-screen p-8 bg-slate-800 text-white font-mono">
				<slot>
					<p>Nothing to show...</p>
				</slot>
			</div>
		)
	}
})