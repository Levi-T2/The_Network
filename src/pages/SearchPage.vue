<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12">
                <form @submit.prevent="getPostsWithSearch()">
                    <div class="mb-3">
                        <label for="postSearch" class="form-label">Search...</label>
                        <input v-model="editable" type="text" class="form-control" id="postSearch">
                        <button class="btn btn-primary mt-3" type="submit">Search Posts <i
                                class="mdi mdi-magnify"></i></button>
                    </div>
                </form>
            </div>
        </section>
        <section class="row">
            <div class="col-12 p-3 d-flex justify-content-between">
                <PageChanger></PageChanger>
            </div>
        </section>
        <section class="row justify-content-center">
            <div v-for="post in posts" :key="post.id" class="col-12 col-md-11 post-card g-3">
                <PostCard :post="post"></PostCard>
            </div>
        </section>
    </div>
</template>


<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';
import { postService } from '../services/PostService';
import PostCard from '../components/PostCard.vue';


export default {
    setup() {
        const editable = ref('');
        onMounted(() => {
            postService.clearAppStateData();
        });
        return {
            editable,
            posts: computed(() => AppState.posts),
            async getPostsWithSearch() {
                try {
                    const searchQuery = editable.value;
                    logger.log(searchQuery);
                    await postService.getPostsWithSearch(searchQuery);
                }
                catch (error) {
                    Pop.error(error);
                }
            }
        };
    },
    components: { PostCard }
};
</script>


<style lang="scss" scoped>
.post-card {
    // border: 3px solid rgb(21, 21, 21);
    padding: 1rem;
    box-shadow: 0px 0px 7.5px 2px #3D3D3D;
    border-radius: 10px;
}
</style>