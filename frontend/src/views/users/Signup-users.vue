<template>
  <div class="main">
    <form>
    <h4>Pas encore de compte ? Inscrivez-vous</h4>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Pseudo</label>
        <input type="text" placeholder="Pseudo" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nom</label>
        <input type="text" placeholder="Nom" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Prénom</label>
        <input type="text" placeholder="Prénom" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">E-Mail</label>
        <input type="email" placeholder="E-Mail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="myInput" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Il faut un minimum de 8 caractères, 1 Majuscule et 1 Chiffre" required>
      </div>
        <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input"  @click="seeYou()" id="exampleInputPassword1">
        <label class="form-check-label" for="exampleCheck1">Vérifier le mot de passe</label>
      </div>
      <button type="submit" class="btn btn-primary">Connecter</button>
    </form>
  </div>
</template>


<script>
export default {
    name: 'Login-users',

    methods: {
        seeYou : function () {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }}
    }
}

</script>

<style>

</style>
<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  width: 300px;
}
.main {
    display: flex;
    display: flex;
    display: flex;
    justify-content: center;
    margin-top:50px;
}
</style>