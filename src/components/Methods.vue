<template>
    <div>
      <h1>{{count }}</h1>
      <button @click="increment">increment</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  // Décomposition pour définir la propriété count
  const count = ref(0);
  
  // Décomposition pour définir la méthode increment
  const increment = () => {
    count.value++;
  };
  </script>