import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { logger } from "../utils/Logger"
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

}

export const postService = new PostService()