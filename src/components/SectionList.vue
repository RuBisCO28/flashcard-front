<template>
  <h1>Book</h1>
  <div class="container">
    <div v-for="section in data.sectionList" :key="section.id">
      <div class="item">
        <a :href="sectionUrl(`${section.name}`)">{{ `section${section.name}` }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'sectionList',
  props: {
    id: {
      type: Number,
    }
  },
  setup(props) {
    const data = reactive({
      sectionList: [],
    });
    async function fetchSection() {
      let result = await axios.get(`/fetch_sections/${props.id}`);
      data.sectionList = result.data.sections;
    };
    onMounted(() => {
      fetchSection();
    });
    function sectionUrl(section_id) {
      return `/sections/${section_id}`
    }

    return { data, fetchSection, sectionUrl };
  }
});
</script>

<style scoped>
h1 {
  text-align: center;
}
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.item {
  background: #0bd;
  color: #000;
  margin: 10px;
  padding: 10px;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
}
</style>
