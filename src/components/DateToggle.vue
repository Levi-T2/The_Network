<template>
    <button v-if="currentPage == 1" @click="getOlderPosts()" class="btn btn-dark">Filter By Oldest</button>
    <button v-if="currentPage >= 2" @click="getOlderPosts()" class="btn btn-dark">Filter By Newest</button>
</template>


<script>
import { computed } from 'vue';
import { postService } from '../services/PostService';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';

export default {
    setup() {
        return {
            currentPage: computed(() => AppState.currentPage),
            lastPage: computed(() => AppState.totalPages),
            async getOlderPosts() {
                try {
                    if (this.currentPage > 1) {
                        await postService.getPosts()
                    } else {
                        await postService.getOlderPosts(this.lastPage)
                    }
                } catch (error) {
                    Pop.error(error)
                }
            }

        }
    }
};
</script>


<style lang="scss" scoped></style>