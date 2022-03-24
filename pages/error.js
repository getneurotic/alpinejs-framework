import Layout from '../components/layout'
import Alpine from '../lib/alpinejs'

export default Alpine.component('ErrorPage', () => ({
	template() {
		return (
			<Layout>
				<h1 class="text-xl capitalize">
					${this.$props.status} - Oops! Something went wrong...
				</h1>
			</Layout>
		)
	}
}))