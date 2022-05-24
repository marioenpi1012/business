import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    customer:{
        type:String,
        require:true,
        maxlength:60,
    },
    address:{
        type:String,
        require:true,
        maxlength:200,
    },
    total:{
        type:Number,
        require:true,
    },
    status:{
        type:Number,
        default:0,
        require:true,
    },
    paymentMethod:{
        type:Number,
        require:true,
    },
    
    },
    { timestamps : true}
)

export default mongoose.models.Order ||  mongoose.model('Order', OrderSchema)