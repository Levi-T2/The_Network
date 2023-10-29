<template>
    <div class="container-fluid">
        <section v-if="profile" class="row justify-content-center">
            <div class="col-10 profile-card g-3">
                <ProfileDetails :profile="profile"></ProfileDetails>
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

export default {
    setup() {
        onMounted(() => {
            getProfile();
            getPostsByProfileId();
        });
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
            posts: computed(() => AppState.posts)
        };
    },
    components: { ProfileDetails, PostCard }
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