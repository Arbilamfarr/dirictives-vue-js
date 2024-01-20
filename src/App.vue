
<template>
  <div id="app">
    <header>
      <!-- Premier section: Header -->
      <h1>Les exemples de Vue.js   " Master 2IAD"</h1>
    </header>

    <div class="container">
      <aside>
        <!-- Deuxième section: Section Left avec les boutons -->
        <button v-for="button in buttons" :key="button.id" @click="showComponent(button.id)" class="btn">
          {{ button.label }}
        </button>
      </aside>

      <main>
        <!-- Troisième section: Main pour afficher le composant Bind.vue -->
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { id: 'v-bind', label: "Dirictive v-bind" },
        { id: 'v-model', label: "Dirictive v-model" },
        { id: 'v-on', label: "Dirictive v-on" },
        { id: 'v-if', label: "Dirictive v-if" },
        { id: 'v-show', label: "Dirictive v-show" },
        { id: 'v-for', label: "Dirictive v-for" },
        { id: 'computed', label: "Computed" },
        { id: 'exercice', label: "Exercice1" },
        { id: 'exercice2', label: "Exercice2" },
       
        // Ajoutez d'autres boutons avec des fonctionnalités différentes ici
      ],
    };
  },
  methods: {
    showComponent(buttonId) {
      // Redirection vers le composant correspondant au bouton cliqué
      this.$router.push({ name: `component-${buttonId}` });
    },
  },
};
</script>

<style>


header {
  background-image: linear-gradient(135deg, #0ecf38, #313a34);
  color: #fff;
  padding: 20px;
  text-align: center;
}


.container {
 
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}


aside {
  border-radius:20px;
  width: 25%;
  background-color: #f0f0f0;
  padding: 20px;
  box-sizing: border-box;
}


button {
  background-image: linear-gradient(135deg, #2fef6c, #dc9821);
  border-radius: 6px;
  box-sizing: border-box;
  color: #ffffff;
  display: block;
  height: 50px;
  font-size: 1em;
  font-weight: 600;
  margin: 10px;
  padding: 4px;
  position: relative;
  text-decoration: none;
  width: 10em;
  z-index: 2;
}
.btn:hover{
  cursor: pointer;
  background-image: linear-gradient(135deg, #abd0f1, #e5b755); 
}


/* Style pour la section principale (main) */
main {
  width: 70%;
  padding: 20px;
  background-color: #fff;
  border-radius: 2%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
/* Ajoutez votre CSS ici pour styliser l'interface */
</style>
