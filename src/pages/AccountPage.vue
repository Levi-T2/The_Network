<template>
  <div class="container-fluid p-0">
    <section :style="{ backgroundImage: 'url(' + accountImg + ')' }"
      class="row cover-bg m-0 justify-content-center align-items-center">
      <div class="col-8 account-card d-flex align-items-center">
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
      </div>
    </section>
  </div>
  <EditAccountModal></EditAccountModal>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import EditAccountModal from '../components/EditAccountModal.vue';
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      accountImg: computed(() => AppState.account.coverImg)
    };
  },
  components: { EditAccountModal }
}
</script>

<style scoped>
.profile-card {
  border: 3px solid black;
  border-radius: 8px;
  padding: 0rem;
}

.cover-bg {
  height: 77dvh;
  width: 100%;
  background-size: cover;
  background-position: center;
  padding: 0rem;
  border-bottom: 5px solid rgb(105, 105, 105);
}

.account-card {
  background-color: rgba(61, 61, 61, 0.49);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  box-shadow: 0px 2px 12px 2px #111111;
  height: 50dvh;
  width: 55em;
  margin: 1rem;
  font-weight: bold;
  color: white;
}

.avatar-img {
  height: 12rem;
  width: 12rem;
}
</style>
