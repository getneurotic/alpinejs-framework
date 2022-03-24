import Alpine from './lib/alpinejs'
import IndexPage from './pages/index'
import AboutPage from './pages/about'
import ErrorPage from './pages/error'
import './app.css'

Alpine.component('App', () => ({
	loading: false,
	route: null,

	init() {
		this.route = window.location.hash.replace('#', '')
	},

	template() {
		switch (this.route) {
			case '/':
				return (<IndexPage></IndexPage>)
				break;
			case '/about':
				return (<AboutPage></AboutPage>)
				break;
			default:
				return (<ErrorPage status="404"></ErrorPage>)
				break;
		}
	}
}))

Alpine.render('App', document.getElementById('app')).start()