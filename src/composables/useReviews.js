import axios from 'axios'
import { ref, onMounted, watch } from 'vue'

export default function useReviews() {
  const contents = ref([]);
  const currentDisplay = ref("");
  const fetchReviews = async () => {
    const result = await axios.get(`/fetch_reviews?limit=10`);
    contents.value = result.data.contents;
    currentDisplay.value = contents.value[0].question;
  }

  onMounted(fetchReviews)
  watch(fetchReviews)

  return {
    contents,
    currentDisplay,
    fetchReviews
  }
}
