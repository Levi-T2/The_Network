<template>
    <div class="border-btm d-flex justify-content-between align-items-center">
        <RouterLink :to="{ name: 'Profile', params: { profileId: post.creator.id } }">
            <p>
                <span class="p-2">
                    <img :src="post.creator.picture" alt="creator_avatar" class="creator-img rounded-circle">
                </span>
                {{ post.creator.name }}
                <i v-if="post.creator.graduated == true" class="mdi mdi-school p-1 fs-5"></i>
            </p>
        </RouterLink>
        <div v-if="post.creatorId == account.id">
            <!-- NOTE add  data-bs-toggle="modal" data-bs-target="#postFormModal" if have time -->
            <button @click="notDone()" class="btn btn-dark-outline">
                <i class="mdi mdi-pen"></i>
            </button>
            <button @click="destroyPost(post.id)" class="btn btn-close"></button>
        </div>
    </div>
    <div class="border-btm p-1">
        <p class="mb-0">
            Date Posted At: {{ post.createdAt.toLocaleDateString() }}
        </p>
    </div>
    <div class="text-end">
        <p class="p-2 text-start">
            {{ post.body }}
        </p>
        <img :src="post.imgUrl" alt="post_image" class="post-img">
    </div>
    <div>
        <p>
            <span>
                <i role="button" @click="likePost(post.id)" class="mdi mdi-heart-outline"></i>
            </span>
            {{ post.likes.length }}
        </p>
    </div>
</template>


<script>
import { RouterLink } from 'vue-router';
import { Post } from '../models/Post';
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';
import { postService } from '../services/PostService';
import { computed } from 'vue';
import { AppState } from '../AppState';


export default {
    props: {
        post: { type: Post, required: true }
    },
    setup() {
        return {
            account: computed(() => AppState.account),
            notDone() {
                Pop.toast('Method Not Yet Implemented')
            },
            async likePost(postId) {
                try {
                    logger.log('Liked this Post:', postId)
                    if (this.account.id == null) {
                        Pop.toast('You Must Be Logged In To Like Posts!')
                        return
                    }
                    await postService.likePost(postId)
                    await postService.getPosts()
                } catch (error) {
                    Pop.error(error)
                }
            },
            async destroyPost(postId) {
                try {
                    const wantsToDelete = await Pop.confirm('Are You Certain You Want To Delete Your Post?')
                    if (!wantsToDelete) {
                        return;
                    }
                    await postService.destroyPost(postId)
                    await postService.getPosts()
                } catch (error) {
                    Pop.error(error)
                }
            }
        };
    },
    components: { RouterLink }
};
</script>


<style lang="scss" scoped>
.post-img {
    height: 12rem;
    width: 12rem;
    background-position: center;
    object-fit: cover;
    border-radius: 3px;
}

.creator-img {
    height: 3rem;
    width: 3rem;
    background-position: center;
    object-fit: cover;
}


.border-btm {
    border-bottom: 3px solid rgb(116, 116, 116);
    border-radius: 1px;
}
</style>