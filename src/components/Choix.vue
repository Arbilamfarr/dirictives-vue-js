<template>
    <div>
      <h1>Choix des modules en Master</h1>
      <form @submit.prevent="registerAnswer">
        <p>Choisir vos modules </p>
        <label v-for="module in moduleOptions" :key="module">
          <input type="checkbox" v-model="Masters" :value="module"> {{ module }}
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Mon choix est: </h3>
        <p id="pAnswer">{{ inpValSubmitted }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const Masters = ref([]);
  const inpValSubmitted = ref('No choice');
  const moduleOptions = [
    'Développement Multiplateforme',
    'No Sql',
    'Gestion de projet',
    'Design Pattern',
    'Analyse multimedia',
    'Système information décisionnelle'
  ];
  
  const registerAnswer = () => {
    inpValSubmitted.value = Masters.value.join(', ');
  };
  </script>
  
  <style scoped>
  div {
    border: dashed black 1px;
    border-radius: 10px;
    padding: 0 20px 20px 20px;
    margin-top: 20px;
    display: inline-block;
  }
  button {
    margin: 10px;
  }
  label {
    display: block;
  }
  label:hover {
    cursor: pointer;
    background-color: rgb(163, 237, 163);
    border-radius: 5px;
  }
  #pAnswer {
    background-color: rgb(176, 240, 176);
    padding: 5px;
  }
  </style>




