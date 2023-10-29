<template>
  <div class="container-fluid p-0">
    <section :style="{ backgroundImage: 'url(' + accountImg + ')' }"
      class="row cover-bg m-0 justify-content-center align-items-center">
      <div class="col-8 account-card d-flex align-items-center">
        <AccountDetails :account="account"></AccountDetails>
      </div>
    </section>
  </div>
  <EditAccountModal></EditAccountModal>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import EditAccountModal from '../components/EditAccountModal.vue';
import AccountDetails from '../components/AccountDetails.vue';
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      accountImg: computed(() => AppState.account.coverImg)
    };
  },
  components: { EditAccountModal, AccountDetails }
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
  border-bottom: 5px ridge rgb(105, 105, 105);
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
</style>
