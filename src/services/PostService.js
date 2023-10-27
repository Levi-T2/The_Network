import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { api } from "./AxiosService"

class PostService {

    async getPosts() {
        const res = await api.get('api/posts')
        logger.log(res.data)
        const newPosts = res.data.posts.map(posts => new Post(posts))
        AppState.posts = newPosts
        // logger.log(AppState.posts)
        AppState.currentPage = res.data.page
        AppState.totalPages = res.data.totalPages
    }
    async changePageOfPosts(pageNumber) {
        const res = await api.get(`api/posts?page=${pageNumber}`)
        const newPosts = res.data.posts.map(posts => new Post(posts))
        AppState.posts = newPosts
        AppState.currentPage = res.data.page
        AppState.totalPages = res.data.totalPages
    }
    async likePost(postId) {
        const res = await api.post(`api/posts/${postId}/like`)
    }
    async createPost(postData) {
        const res = await api.post(`api/posts`, postData)
        logger.log(res.data)
        const newPost = new Post(res.data)
        AppState.posts.push(newPost)
    }
    async destroyPost(postId) {
        const res = await api.delete(`api/posts/${postId}`)
        logger.log('This Post Was Deleted:', res.data)
    }
    async editPost() {
        Pop.toast('Function not yet implemented')
    }

}

export const postService = new PostService()