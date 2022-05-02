<template>
  <p v-if="loading" class="loading">Loading...</p>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from '../store';

const store = useStore();
const loading = computed(() => store.loading);
</script>

<style scoped>
.loading {
  position: absolute;
  left: 10px;
  top: 10px;
  padding: 5px;
  background-color: #333;
  color: white;
}
</style>