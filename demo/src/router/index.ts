import Vue from 'vue';
import Router  from 'vue-router';

Vue.use(Router);

const login = () => require('@/page/login');
const home = () => require('@/page/home');

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/home',
		component: home,
	}
]

export default new Router ({
	routes,
})