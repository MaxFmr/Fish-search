import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Details from "./components/DetailsPage/Details.vue";
import CardList from "./components/CardList/CardList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/details/:name",
      name: "details",
      component: Details,
      props: (route) => ({ id: route.params.name }),
    },
    {
      path: "/",
      name: "home",
      component: CardList,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
