<template>
  <nav class="navbar navbar-expand-lg px-3 navbar-border navbar-bg">
    <router-link class="d-flex p-2 fs-2 navbar-txt" :to="{ name: 'Home' }">
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
      <RouterLink :to="{ name: 'Search' }">
        <p class="mb-0 navbar-links mx-2">Search Posts</p>
      </RouterLink>
      <p class="mb-0 navbar-links mx-2">Search Users</p>
      <div class="p-3">
        <button v-if="account.id" type="button" class="btn btn-navbar rounded-pill" data-bs-toggle="modal"
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

.navbar-bg {
  background-image: url(https://www.pcgamesn.com/wp-content/sites/pcgamesn/2020/04/industries-of-titan.jpeg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.navbar-border {
  border-bottom: 7px ridge black;
}

.navbar-txt {
  color: whitesmoke;
  -webkit-text-stroke: 1.25px;
  -webkit-text-stroke-color: black;
}

.btn-navbar {
  background-color: rgba(208, 208, 208, 0.199);
  backdrop-filter: blur(5px);
  border: 2px solid black;
  font-weight: bold;
  color: whitesmoke;
}

.navbar-links {
  background-color: rgba(208, 208, 208, 0.199);
  backdrop-filter: blur(5px);
  color: whitesmoke;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 5px;
  border: 2px solid black;

}
</style>
