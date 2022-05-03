<template>
  <div class="main">
    <form>
    <h4>Pas encore de compte ? Inscrivez-vous</h4>
      <div class="mb-3">
        <label for="name" class="form-label">Nom</label>
        <input 
        type="text" 
        placeholder="Dupont.." 
        class="form-control" 
        id="name"  
        aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="Email" class="form-label">E-Mail</label>
        <input type="email" placeholder="Dupont@gmail.com" class="form-control" id="email" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="InputPassword" class="form-label">Password</label>
        <input type="password" placeholder="Entrer votre mot de passe" class="form-control" id="PassSignup" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Il faut un minimum de 8 caractères, 1 Majuscule et 1 Chiffre" required>
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
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'Signup-users',

    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
          const self = this;
          this.$store.dispatch('login', {
              email: this.email,
              password: this.password
          }).then(function() {
              self.$router.push('/posts')
              self.$store.dispatch('getUserInfos');
          }, function(error) {
            console.log(error);
          });
        },

        submitForm() {
          this.$v.$touch();
          if (!this.$v.$invalid) {
              const self = this;
              this.$store.dispatch('createAccount', {
                name: this.name,
                email: this.email,
                password: this.password
            }).then(function() {
            // Après l'inscription, se connecter immédiatement
              self.login();
            }, function(error) {
              console.log(error);
            })
          }
        },
        seeYou : function () {
        var x = document.getElementById("PassSignup");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }}
    },
    validations: {
      name: {
        required
      },

      email: {
        required,
        email
      },

      password: {
        required,
        minLength: minLength(8),
      }
    },
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