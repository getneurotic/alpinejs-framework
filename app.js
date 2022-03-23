import Alpine from './lib/alpinejs'
import IndexPage from './pages/index'
import './app.css'

Alpine.component('App', {
	loading: false,
	route: null,

	init() {
		this.route = window.location.hash
	},

	render() {
		return (
			<IndexPage>
				<p>
					Welcome to your first AlpineJS app!
				</p>
			</IndexPage>
		)
	}
})

Alpine.render('App', document.getElementById('app'))