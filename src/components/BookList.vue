<template>
  <h1>Books</h1>
  <div class="container">
    <div v-for="book in data.bookList" :key="book.id">
      <div class="item">
        <a :href="bookUrl(`${book.id}`)">{{ `${book.name}` }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'bookList',

  setup() {
    const data = reactive({
      bookList: [],
    });
    async function fetchSection() {
      let result = await axios.get("/fetch_books");
      data.bookList = result.data.books;
    };
    onMounted(() => {
      fetchSection();
    });
    function bookUrl(book_id) {
      return `/books/${book_id}`
    }

    return { data, fetchSection, bookUrl };
  }
});
</script>

<style scoped>
h1 {
  text-align: center;
}
.container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
}

.item {
  background: #00aaff;
  box-shadow: 0 4px #0088cc;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
}
</style>
