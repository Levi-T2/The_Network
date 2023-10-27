import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostService {

    async getPosts() {
        const res = await api.get('api/posts')
        // logger.log(res.data)
        const newPosts = res.data.posts.map(posts => new Post(posts))
        AppState.posts = newPosts
        logger.log(AppState.posts)
    }

}

export const postService = new PostService()