<template>
  <div class="main">
    <form>
    <h1>Connectez Vous</h1>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="InputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="Password1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="Check1">
        <label class="form-check-label" for="btnCheck">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Connection</button>
    </form>
  </div>
</template>


<script>
export default {
    name: 'Login-users',
    //les data envoyer dans le backend
    data() {
        return {
            email: '',
            password: ''
        }
    },
}
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  width: 300px;
}
.main {
    display: flex;
    justify-content: center;
    margin-top:50px;
}
</style>