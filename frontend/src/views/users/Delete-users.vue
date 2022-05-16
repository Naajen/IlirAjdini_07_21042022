<template>
    <div class="card-groupomania">
        <div v-if="!$store.state.userInfos.isAdmin">
            <h1><b-icon-trash-fill></b-icon-trash-fill> Supprimer le compte</h1>
            <p>Voulez-vous vraiment supprimer ce compte ? Cette action est irréversible...</p>
            <b-button  variant="danger" @click="deleteUser()"><b-icon-trash-fill></b-icon-trash-fill> Supprimer</b-button>
        </div>
        <div v-if="$store.state.userInfos.isAdmin">
            <h1><b-icon-trash-fill></b-icon-trash-fill> Vous êtes l'adminitrateur !</h1>
            <p>Avant de partir, pensez à vous faire remplacer.</p>
            <b-button style="border-radius:20px" variant="danger" @click="redirectionAdmin()">Retour</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Delete-users',

        mounted: function() {
            this.$store.dispatch('getUserInfos');
        },

        methods: {
            deleteUser() {
                const self = this;
                this.$store.dispatch('deleteUser')
                    .then(function() {
                        self.$store.dispatch('logout');
                        self.$router.push('/');
                    }, function(error) {
                        console.log(error);
                    });
            },
            redirectionAdmin() {
                document.location.href="http://localhost:8080/posts"
            }
        }
    }
</script>

<style></style>
