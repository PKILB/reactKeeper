import { Auth0Provider } from "@bcwdev/auth0provider";
import { keepsService } from "../services/KeepsService.js";
import BaseController from "../utils/BaseController.js";




export class KeepsController extends BaseController {

    constructor () {
        super('api/keeps')
        this.router
        .get('', this.getAllKeeps)
        .get('/:keepId', this.getKeepById)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createKeep)
    }
    async createKeep(req, res, next) {
        try {
            const keepData = req.body
            keepData.creatorId = req.userInfo.id

            const keep = await keepsService.createKeep(keepData)
            return res.send(keep)
        } catch (error) {
            next(error)
        }
    }
    async getKeepById(req, res, next) {
        try {
            const keepId = req.params.keepId
            const keep = await keepsService.getKeepById(keepId)
            return res.send
        } catch (error) {
            next(error)
        }
    }
    async getAllKeeps(req, res, next) {
        try {
            const keeps = await keepsService.getAllKeeps()
            res.send(keeps)
        } catch (error) {
            next(error)
        }
    }
}