import Vue from "vue";
import VueRouter from "vue-router";
import DashboardPage from "@/views/Dashboard.vue";
import RegisterPage from "@/views/Register.vue";
import LoginPage from "@/views/Login.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "dashboard",
        component: DashboardPage,
    },

    {
        path: "/login",
        name: "login",
        component: LoginPage,
    },

    {
        path: "/register",
        name: "register",
        component: RegisterPage,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
