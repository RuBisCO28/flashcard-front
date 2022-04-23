<script setup>
import SectionList from '../components/SectionList.vue'
import { defineProps } from 'vue'

const props = defineProps({
  id: String
})
</script>

<template>
  <SectionList :id="id"/>
</template>
