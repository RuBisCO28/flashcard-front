import axios from 'axios'
import { ref, onMounted, watch } from 'vue'

export default function useContents(id) {
  const contents = ref([]);
  const currentDisplay = ref("");
  const fetchSection = async () => {
    const result = await axios.get(`/fetch_section/${id}`);
    contents.value = result.data.contents;
    currentDisplay.value = contents.value[0].question;
  }

  onMounted(fetchSection)
  watch(fetchSection)

  return {
    contents,
    currentDisplay,
    fetchSection
  }
}
