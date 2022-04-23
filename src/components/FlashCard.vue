<template>
  <div class="container">
    <div id="game" class="justify-center flex-column">
      <div id="hud">
        <div class="hud-item">
          <p id="progressText" class="hud-prefix">Question</p>
          <div id="progressBar">
            <div id="progressBarFull"></div>
          </div>
        </div>
      </div>
      <div id="card">
        <div id="card-front"></div>
      </div>
      <div id="flipcard" class="hbtn">FLIP</div>
      <div id="correct" class="hbtn">OK</div>
      <div id="incorrect" class="hbtn">NG</div>
    </div>
  </div>
  <!-- <div class="container">
    <div v-for="content in data.contents" :key="content.id">
      <div class="item">
        <p>{{ `${content.question}` }}</p>
        <p>{{ `${content.answer}` }}</p>
      </div>
    </div>
  </div> -->
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'FlashCard',
  props: {
    id: {
      type: String,
    }
  },
  setup(props) {
    const data = reactive({
      contents: [],
    });
    async function fetchSection() {
      let result = await axios.get(`/fetch_section/${props.id}`);
      data.contents = result.data.contents;
    };
    onMounted(() => {
      fetchSection();
    });
    return { data, fetchSection };
  }
});
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
}

.item {
  /* background: #0bd; */
  color: #000;
  /* margin: 10px;
  padding: 10px;
  text-align: center; */
  font-family: 'Open Sans', sans-serif;
}
</style>
