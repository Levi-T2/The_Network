<template>
    <div class="container-fluid">
        <section v-if="profile" class="row justify-content-center">
            <div class="col-10 profile-card g-3">
                <ProfileDetails :profile="profile"></ProfileDetails>
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

export default {
    setup() {
        onMounted(() => {
            getProfile();
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
        return {
            profile: computed(() => AppState.profile)
        };
    },
    components: { ProfileDetails }
};
</script>


<style lang="scss" scoped>
.profile-card {
    border: 3px solid black;
    border-radius: 8px;
    padding: 0rem;
}
</style>