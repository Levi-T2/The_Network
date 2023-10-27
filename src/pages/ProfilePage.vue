<template>
    <div class="container-fluid">
        <section v-if="profile" class="row justify-content-center">
            <div class="col-10 profile-card g-3">
                <div class="text-center">
                    <img :src="profile.coverImg" alt="" class="cover-img rounded-top">
                </div>
                <div class="p-4">
                    <img :src="profile.picture" alt="" class="creator-img rounded-circle">
                    <p>{{ profile.name }}</p>
                    <p>{{ profile.class }}</p>
                    <p>{{ profile.email }}</p>
                    <div class="fs-4">
                        <i class="mdi mdi-github" role="button" :href="profile.github" :title="profile.github"></i>
                        <i class="mdi mdi-linkedin" role="button" :href="profile.linkedin" :title="profile.linkedin"></i>
                    </div>
                </div>
                <div class="p-2">
                    <p>{{ profile.bio }}</p>
                </div>
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

export default {
    setup() {
        onMounted(() => {
            getProfile()
        });
        const route = useRoute();
        async function getProfile() {
            try {
                const profileId = route.params.profileId
                await profileService.getProfile(profileId)
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            profile: computed(() => AppState.profile)
        }
    }
};
</script>


<style lang="scss" scoped>
.creator-img {
    height: 5rem;
    width: 5rem;
    background-size: cover;
    background-position: center;
    border-radius: 6px;
}

.cover-img {
    height: 30dvh;
    width: 100%;
    background-size: cover;
    background-position: center;
}

.profile-card {
    border: 3px solid black;
    border-radius: 8px;
    padding: 0rem;
}
</style>