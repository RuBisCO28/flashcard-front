<template>
  <div class="container">
    <div class="hud">
      <p class="hud-prefix">Question {{ countRef + 1 }} of {{ contents.length + countRef }}</p>
    </div>
    <div class="card">
      <div class="card-front">{{ currentDisplay }}</div>
    </div>
    <div id="flipcard" class="hbtn" @click="flipCard">FLIP</div>
    <div id="correct" class="hbtn" @click="correct">OK</div>
    <div id="incorrect" class="hbtn" @click="incorrect">NG</div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useContents from '../composables/useContents'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'FlashCard',
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    let { contents, currentDisplay, fetchSection } = useContents(props.id)
    let countRef = ref(0);
    let stateRef = ref("closed");
    let incorrectQuestions = ref("");
    const router = useRouter()
    return { contents, fetchSection, countRef, stateRef, currentDisplay, incorrectQuestions, router };
  },
  methods: {
    flipCard() {
      if (this.stateRef === "closed") {
        this.stateRef = "open";
        this.currentDisplay = this.contents[0].answer;
      } else {
        this.stateRef = "closed";
        this.currentDisplay = this.contents[0].question;
      }
    },
    correct() {
      if (this.contents.length < 2) {
        this.router.push(`/`);
      } else {
        this.contents.splice(0, 1);
        this.currentDisplay = this.contents[0].question;
        this.countRef += 1;
      }
    },
    incorrect() {
      if (this.contents.length < 2) {
        this.router.push(`/`);
      } else {
        this.contents.splice(0, 1);
        this.currentDisplay = this.contents[0].question;
        this.countRef += 1;
      }
    }
  }
});
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
}

/* Heads up Display*/
.hud {
  color: #000;
  font-size: large;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
}

.hud-prefix {
  font-size: 1.5rem;
}

.card {
  width: 21rem;
  height: 14rem;
  cursor: pointer;
  font-size: 1.4rem;
  perspective: 100px;
  margin: auto;
}

.card-front {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  backface-visibility: hidden;
  background: #fff;
  color: #333;
  border: 0.2rem solid rgb(69, 109, 218);
}

.hbtn {
  color: #fff;
  font-size: 1.5rem;
  width: 20rem;
  text-align: center;
  margin: 0 auto;
  padding: 7px;
  border-radius: 5px;
  margin-top: 3rem;
  background: #00aaff;
  box-shadow: 0 4px #0088cc;
  cursor: pointer;
}

.hbtn:hover {
  opacity: 0.8;
}
</style>
