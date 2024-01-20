<template>
    <div id="app">
      <form @submit.prevent="submitForm" class="form-container">
        <label for="name">Nom :</label>
        <input type="text" id="name" v-model="name" required class="input-field">
        
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="email" required class="input-field">
        
        <label for="age">Âge :</label>
        <input type="number" id="age" v-model.number="age" required class="input-field">
        
        <button type="submit" class="submit-button">Soumettre</button>
      </form>
      
      <div v-if="submitted" class="submitted-info">
        <h2>Informations saisies :</h2>
        <p><strong>Nom :</strong> {{ name }}</p>
        <p><strong>Email :</strong> {{ email }}</p>
        <p><strong>Âge :</strong> {{ age }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const age = ref(null);
  const submitted = ref(false);
  
  const submitForm = () => {
    submitted.value = true;
  }
  </script>
  
  <style>

  .form-container {
    margin-bottom: 20px;
    width:60%;
  }
  
  .input-field {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
  }
  
  .submit-button {
    padding: 8px 12px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .submitted-info {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    width:60%;
  }
  </style>
  