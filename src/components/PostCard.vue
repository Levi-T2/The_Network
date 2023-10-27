<template>
    <div class="border-btm">
        <RouterLink :to="{ name: 'Profile', params: { profileId: post.creator.id } }">
            <p>
                <span class="p-2">
                    <img :src="post.creator.picture" alt="creator_avatar" class="creator-img rounded-circle">
                </span>
                {{ post.creator.name }}
            </p>
        </RouterLink>
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


export default {
    props: {
        post: { type: Post, required: true }
    },
    setup() {
        return {
            async likePost(postId) {
                try {
                    logger.log('Liked this Post:', postId)
                    await postService.likePost(postId)
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