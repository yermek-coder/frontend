import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import OrderHistory from "@/pages/OrderHistory";
import Settings from "@/pages/Settings";
import Workers from "@/pages/Workers";
import DispetcherIdPage from "@/pages/DispetcherIdPage";
import DispetcherPage from "@/pages/DispetcherPage";
import DriverIdPage from "@/pages/DriverIdPage";
import DriverPage from "@/pages/DriverPage";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/order_history',
        component: OrderHistory
    },
    {
        path: '/settings',
        component: Settings
    },
    {
        path: '/workers',
        component: Workers,
				children: [
					{
						path: '',
						redirect: '/workers/drivers'
					},
					{
						path: 'dispetchers',
						name: 'dispetchers',
						component: DispetcherPage,
						children: [
							{
								path: ':id',
								name: 'dispetcher',
								component: DispetcherIdPage
							}
						]
					},
					{
						path: 'drivers',
						name: 'drivers',
						component: DriverPage,
						children: [
							{
								path: ':id',
								name: 'user',
								component: DriverIdPage
							}
						]
					}
				]
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
