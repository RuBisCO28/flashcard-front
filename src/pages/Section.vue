<script setup>
import { defineProps } from 'vue'
import FlashCard from '../components/FlashCard.vue'

const props = defineProps({
  id: String
})
</script>

<template>
  <FlashCard :id="id"/>
</template>

