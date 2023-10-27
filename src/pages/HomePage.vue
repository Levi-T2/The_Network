<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 d-flex">
        <section class="row mx-5">
          <div v-for="post in posts" :key="post.id" class="col-12 col-md-9 post-card g-2">
            <PostCard :post="post"></PostCard>
          </div>
        </section>
        <section class="row flex-column">
          <div v-for="ad in ads" :key="ad.title" class="col-12 p-2 ad-mobile">
            <div>
              <img :src="ad.square" alt="ad" :title="ad.title" class="ad-img">
            </div>
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
      posts: computed(() => AppState.posts),
      ads: computed(() => AppState.ads)
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

.ad-img {
  height: 10rem;
  width: 10rem;
  background-position: center;
  object-fit: cover;
}

@media (max-width: 768px) {
  .ad-mobile {
    display: none;
  }
}
</style>
