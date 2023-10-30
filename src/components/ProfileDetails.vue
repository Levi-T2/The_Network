<template>
    <div class="p-3">
        <img :src="profile.picture" alt="Account_Picture" class="avatar-img rounded-circle">
    </div>
    <div class="p-3">
        <p>Username: {{ profile.name }}</p>
        <p>Email: {{ profile.email }}</p>
        <p v-if="profile.bio">Bio: {{ profile.bio }}</p>
        <p v-if="profile.class">Class: {{ profile.class }}</p>
        <a v-if="profile.github" class="mdi mdi-github p-5 fs-2" role="button" :href="profile.github"
            :title="profile.github"></a>
        <a v-if="profile.linkedin" class="mdi mdi-linkedin p-5 fs-2" role="button" :href="profile.linkedin"
            :title="profile.linkedin"></a>
        <a v-if="profile.graduated == true" class="mdi mdi-school p-5 fs-2" role="button" :title="graduated"></a>
    </div>
</template>


<script>
import { Profile } from '../models/Profile';

export default {
    props: {
        profile: { type: Profile, required: true }
    },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.cover-img {
    height: 30dvh;
    width: 100%;
    background-size: cover;
    background-position: center;
}

.avatar-img {
    height: 12rem;
    width: 12rem;
    background-size: cover;
    background-position: center;
}
</style>