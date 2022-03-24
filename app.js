import Alpine from './lib/alpinejs'
import IndexPage from './pages/index'
import AboutPage from './pages/about'
import ErrorPage from './pages/error'
import './app.css'

Alpine.component('App', () => ({
	loading: false,
	route: null,

	init() {
		this.updateRoute()
		window.addEventListener('hashchange', () => this.updateRoute())
	},

	updateRoute() {
		const newRoute = window.location.hash.replace('#', '')
		this.route = newRoute.length ? newRoute : '/'
	},

	template() {
		switch (this.route) {
			case '/': 		return (<IndexPage></IndexPage>)
			case '/about': 	return (<AboutPage></AboutPage>)
			default: 		return (<ErrorPage status="404"></ErrorPage>)
		}
	}
}))

Alpine.render('App', document.getElementById('app')).start()