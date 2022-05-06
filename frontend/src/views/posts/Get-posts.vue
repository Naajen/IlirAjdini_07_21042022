<template>
    <div class="all-post">
        <div class="headerpost">
            <h1 class="publish">Actualité</h1>
            <div class="btn-group dropstart">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Options
                </button>
                <ul class="dropdown-menu">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <DeletePost/>
                        </li>
                        <li class="nav-item">
                            Modifier
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
        <div class="content">
            <p>Commentaire laisser par celui qui le post</p>
            <div class="imgpost">
                <img src="https://www.conservation-nature.fr/wp-content/uploads/visuel/fruit/shutterstock_575378506.jpg" class="d-inline-block align-top logo" alt="Groupomania">
            </div>
            <div class="commentaire">
                <p>Laisser un commentaire ?</p>
                <form>
                    <textarea name="textpost" class="post" cols="60" rows="4"></textarea>
                </form>
                <input class="btn btn-light" type="submit" value="Post">
            </div>
        </div>
    </div>

</template>

<script>
import DeletePost from './Delete-posts.vue'

export default {
    name: 'get-post',
    components: {
        DeletePost
    }
}
</script>

<style scoped>
.navbar-nav {
    padding: 0px 20px;
}
.publish {
    font-size: 1.4em;
}
.headerpost{
    display: flex;
    justify-content: space-between;
}
.all-post {
    margin-top: 20px;
    padding: 15px;
    background-color: #2C2F33;
    border-radius: 10px;
    color: white;
}
.content {
    display: flex;
    flex-direction: column;
}
img {
    width: 100%;
    border-radius: 10px;
}
.post {
    width: 100%;
    height: 40px;
    border-radius: 10px;
}
</style>