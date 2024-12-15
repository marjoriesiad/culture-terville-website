import {Schema, mongoose} from 'mongoose';

const viennoiserieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {  
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
    
})

export default mongoose.model('Viennoiserie', viennoiserieSchema);