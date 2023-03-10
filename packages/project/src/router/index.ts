import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "低代码编辑器",
      component: () => import("../../../lowCode/lowCode/editor/index.vue"),
    },
  ],
});

export default router;
