<template>
    <div class="main">
        <div class="trash">
            <button type="button" class="btn btn-outline-danger" @click="deletePost()" >Supprimer<i class="bi bi-trash-fill"></i></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Delete-post',

        methods: {
            deletePost: function() {
                const self = this;
                this.$store.dispatch('deletePost')
                    .then(function() {
                        self.$router.push('/')
                    }, function(error) {
                        console.log(error);
                    })
            }
        }
    }
</script>

<style></style>