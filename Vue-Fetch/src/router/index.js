import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Jobs from "../views/Jobs/Jobs.vue";
import JobDetails from "../views/Jobs/JobDetails.vue";
import NotFound from "../views/404.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/about", // You can change the path
			name: "about", // and change <RouterLink :to="{name:'about'}">

			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/AboutView.vue"),
		},
		{
			path: "/jobs",
			name: "Jobs",
			component: Jobs,
		},
		{
			path: "/jobs/:id",
			name: "JobDetails",
			component: JobDetails,
			props: true, // Optional, but recommended
		},
		// Redirect
		{
			path: "/job-list",
			redirect: "/jobs",
		},
		// CatchAll - 404
		{
			path: "/:catchall(.*)",
			name: "404",
			component: NotFound,
		},
	],
});

export default router;
