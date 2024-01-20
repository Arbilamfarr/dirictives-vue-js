<template>
    <div>
      <button @click="toggleVisibility">Afficher / Masquer</button>
      <div v-show="isVisible">
        <p>Ce contenu est affiché si isVisible est vrai.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Déclaration d'une variable réactive
  const isVisible = ref(true);
  
  // Méthode pour basculer la visibilité
  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
  };
  </script>
  