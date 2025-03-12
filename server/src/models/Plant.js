import { Schema, model } from 'mongoose';

const plantSchema = new Schema({
    commonName: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    scientificName: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: 0
    },
    bibliography: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    familyCommonName: {
        type: String
    },
    imageUrl: {
        type: String,
    },
    synonyms: [String],
    genus: {
        type: String,
        required: true
    },
    family: {
        type: String,
        required: true
    },

    link: {{}}
    count: Number
})

const Plant = model('Plant', plantSchema);

export default Plant;