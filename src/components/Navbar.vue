<template>
  <nav class="navbar navbar-expand-lg px-3 navbar-clr">
    <router-link class="navbar-brand d-flex p-2 fs-3" :to="{ name: 'Home' }">
      <i class="mdi mdi-electron-framework"></i>
      <b class="px-1">NetScape</b>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
      </ul>
      <div class="p-2">
        <button v-if="account.id" type="button" class="btn btn-dark-outline rounded-pill" data-bs-toggle="modal"
          data-bs-target="#postFormModal">
          Create Post
          <i class="mdi mdi-plus"></i>
        </button>
      </div>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import Login from './Login.vue';
import { AppState } from '../AppState';
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  },
  components: { Login }
}
</script>

<style scoped>
@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}

.navbar-clr {
  background-color: rgb(92, 187, 187);
  color: black;
  border-bottom: 7px ridge black;
}
</style>
