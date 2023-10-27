
export class Post {
    constructor(data) {
        this.body = data.body
        this.creator = data.creator
        this.creatorId = data.creatorId
        this.id = data.id
        this.imgUrl = data.imgUrl
        this.likeIds = data.likeIds
        this.likes = data.likes
    }
}