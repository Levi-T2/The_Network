import { AppState } from "../AppState";
import { Post } from "../models/Post";
import { Profile } from "../models/Profile";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class ProfileService {
    async getProfile(profileId) {
        AppState.profile = null;
        const res = await api.get(`api/profiles/${profileId}`)
        logger.log('Getting Profile', res.data)
        AppState.profile = new Profile(res.data)
    }
    async getPostsByProfileId(profileId) {
        AppState.blogs = null;
        const res = await api.get(`api/posts?creatorId=${profileId}`)
        logger.log(res.data)
        AppState.posts = res.data.posts.map((posts) => new Post(posts))
    }
}

export const profileService = new ProfileService()