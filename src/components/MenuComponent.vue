<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/react">REACT</router-link>
            </li>
            <li>
                <router-link to="/angular">ANGULAR</router-link>
            </li>
            <li>
                <router-link to="/vue">VUE</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>

<style>
    ul #menu{
        text-decoration: none;
    }
</style>