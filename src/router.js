import * as VueRouter from "vue-router";

const routes = [
    {
        path: "/",redirect: "/main"
    },
    {
        path: "/main",
        component: () => import("./page/main/main.vue")
    },
    {
        path: "/queue-user",
        component: () => import("./page/queue/queue-user/queue-user.vue"),
    },
    {
        path: "/queue-organizer",
        component: () => import("./page/queue/queue-organizer/queue-organizer.vue"),
    },
];

const router = new VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory(),
})
export default router