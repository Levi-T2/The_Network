<template>
    <div class="modal fade" id="postFormModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create Post</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="handleSubmit()">
                        <div class="mb-3">
                            <label for="postBody" class="form-label">Post Body</label>
                            <input v-model="editable.body" type="text" class="form-control" id="postBody">
                        </div>
                        <div class="mb-3">
                            <label for="imgUrl" class="form-label">Post Image</label>
                            <input v-model="editable.imgUrl" type="url" class="form-control" id="imgUrl">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit Post</button>
                    </form>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import Pop from '../utils/Pop';
import { postService } from '../services/PostService';
import { Modal } from 'bootstrap';


export default {
    setup() {
        const editable = ref({})
        return {
            editable,
            handleSubmit() {
                if (!editable.value.id) {
                    this.createPost()
                } else {
                    this.editPost()
                }
            },
            async createPost() {
                try {
                    const postData = editable.value
                    await postService.createPost(postData)
                    Modal.getOrCreateInstance('#postFormModal').hide()
                } catch (error) {
                    Pop.error(error)
                }
            },
            async editPost() {
                try {
                    Pop.toast('Function not yet implemented')
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>