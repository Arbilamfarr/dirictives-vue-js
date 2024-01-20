<template>
    <div>
      <p>{{ message }}</p>
      <input v-bind:value="message" @input="updateMessage">
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Déclaration d'une variable réactive
  const message = ref('Hello, Vue!');
  
  // Méthode pour mettre à jour la valeur de message
  const updateMessage = (event) => {
    message.value = event.target.value;
  };
  </script>
  