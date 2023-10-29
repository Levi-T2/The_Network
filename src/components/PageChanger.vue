<template>
    <button v-if="searchQuery == ''" :disabled="currentPage <= 1" class="btn btn-dark-outline"
        @click="changePageOfPosts(currentPage - 1)">Previous
        Page</button>
    <button v-else :disabled="currentPage <= 1" class="btn btn-dark-outline"
        @click="changePageOfPostsWithSearch(currentPage - 1)">Previous
        Page</button>
    <p class="mb-0">
        {{ currentPage }} of {{ totalPages }}
    </p>
    <button v-if="searchQuery == ''" :disabled="currentPage == totalPages" class="btn btn-dark-outline"
        @click="changePageOfPosts(currentPage + 1)">Next Page</button>
    <button v-else :disabled="currentPage == totalPages" class="btn btn-dark-outline"
        @click="changePageOfPostsWithSearch(currentPage + 1)">Next Page</button>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';
import { postService } from '../services/PostService';
import { adService } from '../services/AdService';


export default {
    setup() {
        return {
            currentPage: computed(() => AppState.currentPage),
            totalPages: computed(() => AppState.totalPages),
            searchQuery: computed(() => AppState.searchQuery),
            async changePageOfPosts(pageNumber) {
                try {
                    const endpointUrl = `api/posts?page=${pageNumber}`
                    await postService.changePageOfPosts(endpointUrl)
                    await adService.getAds()
                } catch (error) {
                    Pop.error
                }
            },
            async changePageOfPostsWithSearch(pageNumber) {
                try {
                    const searchQuery = AppState.searchQuery
                    const endpointUrl = `api/posts?page=${pageNumber}&query=${searchQuery}`
                    await postService.changePageOfPosts(endpointUrl)
                } catch (error) {
                    Pop.error(error)
                }
            },
        }
    }
};
</script>


<style lang="scss" scoped></style>