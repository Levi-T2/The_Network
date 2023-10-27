<template>
    <div class="border-btm">
        <p>
            <span class="p-2">
                <img :src="post.creator.picture" alt="creator_avatar" class="creator-img rounded-circle">
            </span>
            {{ post.creator.name }}
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
                <i class="mdi mdi-heart-outline"></i>
            </span>
            {{ post.likes.length }}
        </p>
    </div>
</template>


<script>
import { Post } from '../models/Post';


export default {
    props: {
        post: { type: Post, required: true }
    },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.post-img {
    height: 12rem;
    width: 12rem;
    background-position: center;
    object-fit: cover;
    border-radius: 2px;
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