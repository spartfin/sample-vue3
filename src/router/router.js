import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue";
import About from "@/pages/About.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/about',
        component: About
    }
];
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE__URL)
});

export default router;
