<template>
    <div class="container-fluid">
        <section v-if="profile" class="row justify-content-center">
            <div class="col-10 profile-card g-3">
                <ProfileDetails :profile="profile"></ProfileDetails>
            </div>
        </section>
        <section class="row">
            <div class="col-12 p-5 d-flex justify-content-between">
                <button :disabled="currentPage <= 1" class="btn btn-dark-outline"
                    @click="changePageOfPostsOnProfile(currentPage - 1)">Previous
                    Page</button>
                <p class="mb-0">
                    {{ currentPage }} of {{ totalPages }}
                </p>
                <button :disabled="currentPage == totalPages" class="btn btn-dark-outline"
                    @click="changePageOfPostsOnProfile(currentPage + 1)">Next Page</button>
            </div>
        </section>
        <section class="row justify-content-center">
            <p class="p-1s fs-3 fw-bold">This User's Posts</p>
            <div v-for="post in posts" :key="post.id" class="col-12 col-md-8 post-card g-3">
                <PostCard :post="post"></PostCard>
            </div>
        </section>
    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { profileService } from '../services/ProfileService.js'
import { useRoute } from 'vue-router';
import { AppState } from '../AppState';
import ProfileDetails from '../components/ProfileDetails.vue';
import PostCard from '../components/PostCard.vue';
import { postService } from '../services/PostService';

export default {
    setup() {
        onMounted(() => {
            clearAppStateData();
            getProfile();
            getPostsByProfileId();
        });
        function clearAppStateData() {
            try {
                postService.clearAppStateData()
            } catch (error) {
                Pop.error(error)
            }
        }
        const route = useRoute();
        async function getProfile() {
            try {
                const profileId = route.params.profileId;
                await profileService.getProfile(profileId);
            }
            catch (error) {
                Pop.error(error);
            }
        }
        async function getPostsByProfileId() {
            try {
                const profileId = route.params.profileId;
                await profileService.getPostsByProfileId(profileId)
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            profile: computed(() => AppState.profile),
            posts: computed(() => AppState.posts),
            currentPage: computed(() => AppState.currentPage),
            totalPages: computed(() => AppState.totalPages),
            async changePageOfPostsOnProfile(pageNumber) {
                try {
                    const profileId = route.params.profileId
                    const endpointUrl = `api/posts?creatorId=${profileId}&page=${pageNumber}`
                    await postService.changePageOfPosts(endpointUrl)
                } catch (error) {
                    Pop.error(error)
                }
            }

        };
    },
    components: { ProfileDetails, PostCard, }
};
</script>


<style lang="scss" scoped>
.profile-card {
    border: 3px solid black;
    border-radius: 8px;
    padding: 0rem;
}

.post-card {
    // border: 3px solid rgb(21, 21, 21);
    padding: 1rem;
    box-shadow: 0px 0px 7.5px 2px #3D3D3D;
    border-radius: 10px;
}
</style>