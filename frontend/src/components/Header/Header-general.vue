<template>
    <header>
        <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
            <b-container class="dark">
                <b-navbar variant="faded" type="light">
                    <b-navbar-brand>
                        <router-link v-if="status != 'login'"  to="/" class="nav-link">
                            <img  src="../../assets/images/logo.svg" class="d-inline-block align-top logo" alt="Groupomania">
                        </router-link>
                        <router-link v-if="status == 'login'" to="/posts" class="nav-link">
                            <img  src="../../assets/images/logo.svg" class="d-inline-block align-top logo" alt="Groupomania" >
                        </router-link>
                    </b-navbar-brand>
                </b-navbar>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <li v-if="status != 'login'" class="nav-item">
                            <router-link to="/signup" class="nav-link"><b-icon-person-plus-fill></b-icon-person-plus-fill> Inscription</router-link>
                        </li>
                        <li v-if="status != 'login'" class="nav-item">
                            <router-link to="/Login" class="nav-link" exact><b-icon-box-arrow-in-right></b-icon-box-arrow-in-right> Connexion</router-link>
                        </li>
                        <li v-if="status == 'login'">
                            <b-button @click="createPost()" pill variant="danger" class="btn-black"><b-icon-plus-circle-fill></b-icon-plus-circle-fill> Poster</b-button>
                        </li>
                        <li v-if="status == 'login'" class="nav-item">
                            <router-link to="/posts" class="nav-link" exact><b-icon-list></b-icon-list> Tous les posts</router-link>
                        </li>
                        <b-nav-item-dropdown v-if="status == 'login' && userName" right>
                            <template #button-content><b-icon-person-fill></b-icon-person-fill> {{ userName }}</template>
                            <li>
                                <router-link v-if="status == 'login'" to="/profil" class="dropdown-item">
                                    <b-icon icon="person-fill"></b-icon> Profil
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/modify-user" class="dropdown-item">
                                    <b-icon-pencil-fill></b-icon-pencil-fill> Modification
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/delete-user" class="dropdown-item">
                                    <b-icon-trash-fill></b-icon-trash-fill> Suppression
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#" class="dropdown-item">
                                   <p class="copyright">Groupomania &copy; {{ new Date().getFullYear() }}</p>
                                </router-link>
                            </li>
                            <div v-if="isAdmin" class="dropdown-divider"></div>
                            <b-dropdown-item v-if="isAdmin" @click="allUsers()">
                                <b-icon-person-lines-fill></b-icon-person-lines-fill> Administration
                            </b-dropdown-item>
                            <div class="dropdown-divider"></div>
                            <b-dropdown-item @click="logout()">
                                <b-icon-box-arrow-in-left></b-icon-box-arrow-in-left> Déconnexion
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </header>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapGetters } from 'vuex'

    export default {
        name: 'Header-general',

        mounted: function() {
            if (this.$store.state.user.userId != -1) {
                this.$store.commit('SET_STATUS', 'login')
            }
        },

        computed: {
            ...mapState({
                status: 'status'
            }),

            ...mapGetters({
                userName: 'userName',
                isAdmin: 'isAdmin'
            }),
        },

        methods: {
            logout: function() {
                this.$store.dispatch('logout');
                this.$router.push('/');
            },

            createPost: function() {
                this.$router.push('/create-post');
            },
            //TO DO
            // allUsers: function() {
            //     this.$router.push('/admin/users');
            // }
        }
    }
</script>

<!-- le scoped signifie que le css ne s'applique qu'à cette page -->
<style scoped >
.ml-auto {
    margin-left: auto !important;
}
.copyright {
    font-size: 0.9em;
}
.logo {
    width: 230px;
    height: auto;
}
.nav-link.router-link-exact-active {
    color: #FFF !important;
}

.navbar-nav {
    margin-top: 10px;
    margin-bottom: 10px;
}

.navbar-nav button.btn-danger {
    margin: 0 8px;
}
.copyright {
    margin-top: 15px;
    font-size: 0.7em;
}
.bg-info {
    background-color: #2C2F33 !important;
}
@media screen and (max-width:320px) {
    .logo  {
        width: 180px; 
    }
}
</style>
