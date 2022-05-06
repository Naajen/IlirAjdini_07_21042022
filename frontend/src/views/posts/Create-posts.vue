<template>
    <div class="main">
        <div class="container createpost">
            <h1 class="publish">Publier un post</h1>
            <form>
                <textarea name="textpost" id="firstpost" cols="60" rows="4" placeholder="Commencez un post">
                </textarea>
            </form>
            <form>
                <div class="form-group-image">
                    <input type="file" class="form-control-file" id="images">
                </div>
                <input class="btn btn-primary" type="submit" value="Submit">
            </form>
        </div>
        <Getall/>
    </div>
</template>

<script>
import Getall from './Get-posts.vue'

export default {
    name: 'Create-post',
      components: {
    Getall
    }
}
</script>

<style scoped>
.publish {
    font-size: 1.4em;
}
#firstpost {
    width: 100%;
    border-radius: 10px;
}
.main {
    width: 50%;
}
.createpost {
    margin-top: 20px;
    background-color: orange;
    padding: 20px;
    border-radius: 10px;
}
@media screen and (max-width: 1000px) {
    .main {
        width: 95%;
    }
}
</style>