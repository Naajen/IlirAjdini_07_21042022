<template>
    <div class="main">
        <h1 id="publish">Publier un post</h1>
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
</template>

<script>
export default {
    name: 'Create-post',
}
</script>

<style scoped>
#publish {
    font-size: 1.4em;
}
</style>