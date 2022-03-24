import Layout from '../components/layout'
import Alpine from '../lib/alpinejs'

export default Alpine.component('AboutPage', () => ({
	template() {
		return (
			<Layout>
				<h1 class="text-xl capitalize">This is a title</h1>
			</Layout>
		)
	}
}))