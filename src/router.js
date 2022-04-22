import { createRouter, createWebHistory } from 'vue-router'
// HomeビューとAboutビューのインポート
import Home from "./pages/Home.vue";
import Book from "./pages/Book.vue";
import Section from "./pages/Section.vue";

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home,
  },
  {
    path: '/books/:id',
    name: "Book",
    component: Book,
    props: true,
  },
  {
    path: '/sections/:id',
    name: "Section",
    component: Section,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
