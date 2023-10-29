<template>
    <div class="p-3">
        <img :src="account.picture" alt="Account_Picture" class="avatar-img rounded-circle">
    </div>
    <div class="p-3">
        <p>Username: {{ account.name }}</p>
        <p>Email: {{ account.email }}</p>
        <p>Bio: {{ account.bio }}</p>
        <p>Class: {{ account.class }}</p>
        <a v-if="account.github" class="mdi mdi-github p-5 fs-2" role="button" :href="account.github"
            :title="account.github"></a>
        <a v-if="account.linkedin" class="mdi mdi-linkedin p-5 fs-2" role="button" :href="account.linkedin"
            :title="account.linkedin"></a>
    </div>
    <div class="p-4">
        <button data-bs-toggle="modal" data-bs-target="#editAccountModal" class="btn rounded-pill btn-primary">Edit
            Account</button>
    </div>
</template>


<script>
import { Account } from '../models/Account';


export default {
    props: {
        account: { type: Account, required: true }
    },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.avatar-img {
    height: 12rem;
    width: 12rem;
}
</style>