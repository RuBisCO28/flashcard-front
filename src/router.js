import { createRouter, createWebHistory } from 'vue-router'
import Home from "./pages/Home.vue";
import Book from "./pages/Book.vue";
import Section from "./pages/Section.vue";
import Review from "./pages/Review.vue";

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
  {
    path: '/reviews',
    name: "Review",
    component: Review,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
