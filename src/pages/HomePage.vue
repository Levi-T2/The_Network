<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 d-flex justify-content-between">
        <section class="row mx-3">
          <div v-for="post in posts" :key="post.id" class="col-12 col-md-9 post-card g-2">
            <PostCard :post="post"></PostCard>
          </div>
        </section>
        <section class="row">
          <div class="col-12">
            <p>Ad here</p>
            <p>Ad here</p>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop';
import { postService } from '../services/PostService';
import { AppState } from "../AppState.js";
import PostCard from '../components/PostCard.vue';
import { adService } from '../services/AdService'

export default {
  setup() {
    onMounted(() => {
      getPosts();
      getAds();
    });
    async function getPosts() {
      try {
        await postService.getPosts();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    async function getAds() {
      try {
        await adService.getAds()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      posts: computed(() => AppState.posts)
    };
  },
  components: { PostCard }
}
</script>

<style scoped lang="scss">
.post-card {
  // border: 3px solid rgb(21, 21, 21);
  padding: 1rem;
  box-shadow: 0px 0px 7.5px 2px #3D3D3D;
  border-radius: 10px;
}
</style>
