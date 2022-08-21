import { createRouter, createWebHashHistory } from 'vue-router';
import home from "./main_page.vue";
import market from "./market_page.vue";
import pools from "./pools_page.vue";

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', component: home },
		{ path: '/market', component: market },
		{ path: '/pools', component: pools },
	]
});