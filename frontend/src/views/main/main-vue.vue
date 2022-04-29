<template>
    <div class="main">
        <h4>Bienvenue dans le réseau</h4>
        <img id="image-index" src="../../assets/images/icon-above-font2.png" alt="Logo groupomania">
        <router-link class="nav-link" to="/Signup">Si vous n'avez pas de compte commencez ici !</router-link>
    </div>
</template>

<script>
export default {
    name : 'main-index',
}
</script>

<style scoped lang="scss">
.nav-link {
    text-align: center;
    color: black;
    font-size: 1.5em;
}
</style>