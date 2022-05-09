<template>
    <div class="card-groupomania">
        <div class="profil">
            <b-avatar src="https://placekitten.com/300/300" size="10rem"></b-avatar>
        </div>
        <div class="self-information">
            <h1>Profil de : {{ name }} </h1>
            <h2>E-mail : {{ email }} </h2>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'profil-user',

        computed: {
            name: {
                get() {
                    return this.$store.state.userInfos.name;
                },
            },

            email: {
                get() {
                    return this.$store.state.userInfos.email;
                }
            },
            create: {
                get() {
                    return this.$store.state.userInfos;
                }
            },
        },
    }
</script>

<style>
.profil{
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
}
</style>
