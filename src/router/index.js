import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Stock from "../views/Stock.vue";
import StockCreate  from "../views/StockCreate.vue";
import StockEdit from "../views/StockEdit.vue";
import Report from "@/views/Report.vue";
import About from "@/views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/stock",
    name: "Stock",
    component: Stock,
  },
  {
    path: "/stock-create",
    name: "StockCreate",
    component: StockCreate,
  },
  {
    path: "/stock-edit/:id",
    name: "stock-edit",
    component: StockEdit
  },
  {
    path: "/report",
    meta: { isSecured: true },
    name: "report",
    component: Report
  },
  {
    path: "/about",
    meta: { isSecured: false },
    name: "about",
    component: About
  },
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "*",
    redirect: "/login"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
