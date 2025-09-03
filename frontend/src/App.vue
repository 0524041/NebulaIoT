<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getDevices } from "./api";

const devices = ref<any[]>([]);

onMounted(async () => {
  devices.value = await getDevices();
});
</script>

<template>
  <h2>設備列表</h2>
  <ul>
    <li v-for="d in devices" :key="d.id">{{ d.name }} - {{ d.status }}</li>
  </ul>
</template>
