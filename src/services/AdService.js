import { api } from "./AxiosService"
import { logger } from "../utils/Logger"
class AdService {
    async getAds() {
        const res = await api.get('api/ads')
        logger.log(res.data)


    }
}
export const adService = new AdService()