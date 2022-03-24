import Layout from '../components/layout'
import Alpine from '../lib/alpinejs'

export default Alpine.component('AboutPage', () => ({
	template() {
		return (
			<Layout>
				<div class="flex flex-col text-center space-y-4">
					<h1 class="text-xl capitalize">About AlpineJS Framework</h1>
					<p>
						It's a way of  living.
					</p>
					<a href="/#" class="underline hover:text-blue-500">Back to Home</a>
				</div>
			</Layout>
		)
	}
}))