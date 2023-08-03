import { keepsService } from "../services/KeepsService.js";
import BaseController from "../utils/BaseController.js";




export class KeepsController extends BaseController {

    constructor () {
        super('api/keeps')
        this.router
        .get('', this.getAllKeeps)
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