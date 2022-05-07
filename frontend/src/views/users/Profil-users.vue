<template>
    <div class="card-groupomania">
        <div>
            <h1>Profil de : {{ name }}</h1>
        </div>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'

    export default {
        mounted: function() {
            this.$store.dispatch('getUserInfos');
        },

        validations: {
            name: {
                required
            }
        },

        computed: {
            name: {
                get() {
                    return this.$store.state.userInfos.name;
                },
                set(newName) {
                    this.$store.commit('SET_USER_NAME', newName)
                }
            },

            email: {
                get() {
                    return this.$store.state.userInfos.email;
                }
            },

            invalidateFields: function() {
                if (this.$v.$invalid) {
                    return true
                } else {
                    return false
                }
            }
        },

        methods: {
            submitForm() {
                this.$v.$touch();

                if (!this.$v.$invalid) {
                    this.$store.dispatch('editUserName', { 
                    name: this.name 
                    }).then(function() {
                        console.log('Utilisateur modifié avec succès !')
                    }, function(error) {
                        console.log(error);
                    });
                }
            }
        }
    }
</script>

<style></style>
