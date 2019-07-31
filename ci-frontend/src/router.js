import Vue from "vue";
import Router from "vue-router";
import CheckToken from "containers/CheckToken";
import OverView from "views/OverView.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "overview",
      component: OverView
    },
    {
      path: "/about",
      name: "about",
      component: CheckToken(
        import(/* webpackChunkName: "about" */ "./views/About.vue")
      )
    }
  ]
});
