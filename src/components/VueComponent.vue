<template>
    <h1>Vue</h1>
    <h1>Mi primer vue de pruebas</h1>
    <h2>Este proyecto esta realizado con : {{framework}}</h2>
    <h2>Y esta realizado por : {{nombre}}</h2>
    <img id="img1" src="./../assets/logo.png"/>
</template>

<script>
export default {
    name:"VueComponent",
    data() {
        //LAS VARIABLES SON DECLARADAD EN FORMATO JSON DENTRO DE UN RETURN
        return{
            framework: "Vue",
            nombre:"Jose",
        }
    }
}
</script>

<style>
    @import './../assets/css/estilos.css';

</style>