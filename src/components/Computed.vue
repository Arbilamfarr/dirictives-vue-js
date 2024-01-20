<script setup>
import { ref, computed } from 'vue';
const isSelected=ref(true);
const is2iad=computed(()=> isSelected.value ? "yes" :"no" )

</script>

<template>
 checked :<input type="checkbox" v-model="isSelected">{{ is2iad }}
</template>

<style scoped>

</style>