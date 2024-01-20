<template>
    <div>
      <input v-model="message" placeholder="Saisissez du texte">
      <p>Vous avez saisi : {{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Déclaration d'une variable réactive
  const message = ref('');
  // La liaison bidirectionnelle est automatique avec v-model
  </script>
  