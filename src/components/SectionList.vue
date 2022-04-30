<template>
  <h1>Book</h1>
  <div class="container">
    <div v-for="section in data.sectionList" :key="section.id">
      <div class="item">
        <a :href="sectionUrl(`${section.id}`)">{{ `${section.name}` }}</a>
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
      type: String,
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
  background: #00aaff;
  box-shadow: 0 4px #0088cc;
  color: #fff;
  font-size: 1.5rem;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
}
</style>
