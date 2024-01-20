<template>
    <div>
      
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Déclaration d'une variable réactive contenant un tableau d'objets
  const items = ref([
    { id: 1, name: 'Premier élément' },
    { id: 2, name: 'Deuxième élément' },
    { id: 3, name: 'Troisième élément' }
  ]);
  </script>
  