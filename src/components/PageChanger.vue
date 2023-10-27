<template>
    <button :disabled="currentPage <= 1" class="btn btn-dark-outline" @click="changePageOfPosts(currentPage - 1)">Previous
        Page</button>
    <p>
        {{ currentPage }} of {{ totalPages }}
    </p>
    <button :disabled="currentPage == totalPages" class="btn btn-dark-outline"
        @click="changePageOfPosts(currentPage + 1)">Next Page</button>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';
import { postService } from '../services/PostService';

export default {
    setup() {
        return {
            currentPage: computed(() => AppState.currentPage),
            totalPages: computed(() => AppState.totalPages),
            async changePageOfPosts(pageNumber) {
                try {
                    await postService.changePageOfPosts(pageNumber)
                } catch (error) {
                    Pop.error
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>