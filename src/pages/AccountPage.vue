<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-10">
        <div class="p-3">
          <img :src="account.picture" alt="Account_Picture" class="img-fluid">
        </div>
        <div class="p-3">
          <p>Username: {{ account.name }}</p>
          <p>Email: {{ account.email }}</p>
        </div>
        <button data-bs-toggle="modal" data-bs-target="#editAccountModal" class="btn btn-info">Edit Account</button>
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
      account: computed(() => AppState.account)
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
</style>
