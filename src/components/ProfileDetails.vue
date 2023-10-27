<template>
    <div class="text-center">
        <img :src="profile.coverImg" alt="" class="cover-img rounded-top">
    </div>
    <div class="p-2">
        <img :src="profile.picture" alt="" class="creator-img rounded-circle p-2">
        {{ profile.name }}
        <i v-if="profile.graduated == true" class="mdi mdi-school p-1 fs-5"></i>
    </div>
    <div class="p-3">
        <p>{{ profile.class }}</p>
        <p>{{ profile.email }}</p>
        <div class="fs-3">
            <a v-if="profile.github" class="mdi mdi-github p-1" role="button" :href="profile.github"
                :title="profile.github"></a>
            <a v-if="profile.linkedin" class="mdi mdi-linkedin p-1" role="button" :href="profile.linkedin"
                :title="profile.linkedin"></a>
        </div>
    </div>
    <div class="p-3">
        <p>{{ profile.bio }}</p>
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
</style>