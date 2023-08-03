import { dbContext } from "../db/DbContext.js"




class KeepsService {
    async getAllKeeps() {
        const keeps = await dbContext.Keeps.find()
        .populate('creator', 'name picture')
        .populate('keptCount')
        return keeps
    }

}

export const keepsService = new KeepsService()