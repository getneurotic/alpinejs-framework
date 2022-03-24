import Alpine from "../lib/alpinejs"

export default Alpine.component('Layout', () => ({
	template() {
		return (
			<div class="flex items-center justify-center w-full min-h-screen p-8 bg-slate-800 text-white font-mono">
				${this.$children}
			</div>
		)
	}
}))