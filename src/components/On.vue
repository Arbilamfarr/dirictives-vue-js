<template>
  <div>
    <button @click="incrementCounter">Cliquez pour incrémenter</button>
    <p>Compteur : {{ counter }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Déclaration d'une variable réactive
const counter = ref(0);

// Méthode pour incrémenter le compteur
const incrementCounter = () => {
  counter.value++;
};
</script>
