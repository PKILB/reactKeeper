import { Schema } from "mongoose";



export const KeepSchema = new Schema(
    {
        id: { type: Number, min: 0, required: true},
        name: { type: String, required: true},
        description: { true: String, required: true},
        img: {type: String, required: true},

        creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true}
    }, { timestamps: true, toJSON: { virtuals: true }}
)

KeepSchema.virtual('creator', {
    ref: 'Account',
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true
})

KeepSchema.virtual('keptCount', {
    ref: 'Keep',
    localfield: '_id',
    foreignField: 'keepId',
    count: true
})