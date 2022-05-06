<template>
  <div class="container-main header-w">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Groupomania</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/Login">Se connecter</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/create-post">Main</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'Header-Index',
  components: {
  }
}
</script>

<style scoped>
</style>
