import { api } from "./AxiosService"
import { logger } from "../utils/Logger"
import { Ad } from "../models/Ad"
import { AppState } from "../AppState"

class AdService {
    async getAds() {
        const res = await api.get('api/ads')
        // logger.log(res.data)
        const newAds = res.data.map(ad => new Ad(ad))
        AppState.ads = newAds
        logger.log(AppState.ads)
    }
}
export const adService = new AdService()