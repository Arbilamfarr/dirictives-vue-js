<script setup>
// Exemple de réception des props
const props=defineProps(['nameMaster','message'])

</script>

<template>
     <h1>{{message}}</h1>
    <h1>{{nameMaster}}</h1>
</template>

<style scoped>

</style>