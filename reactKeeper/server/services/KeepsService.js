import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"




class KeepsService {
    async getKeepById(keepId) {
        const keep = await dbContext.Keeps.findById(keepId).populate('creator', 'name picture')
        
        if (!keep) {
            throw new BadRequest('Invalid Keep Id!')
        }
        return keep
    }
    async getAllKeeps() {
        const keeps = await dbContext.Keeps.find()
        .populate('creator', 'name picture')
        .populate('keptCount')
        return keeps
    }

}

export const keepsService = new KeepsService()