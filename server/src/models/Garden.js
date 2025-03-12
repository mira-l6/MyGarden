import { Types, Schema, model } from 'mongoose';

const gardenSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    plants: [{
        type: Types.ObjectId,
        ref: 'Plant'
    }]
})

const Garden = model('Garden', gardenSchema);

export default Garden;