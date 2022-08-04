import mongoose from 'mongoose';

const ProductsSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        maxlength:60,
    },
    desc:{
        type:String,
        require:true,
        maxlength:200,
    },
    img:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    category:{
        type:String,
        require:true,
        maxlength:60
    },
    subcategory:{
        type:String,
        maxlength:60,
        require:true
    }
    
    },
    { timestamps : true}
)

export default mongoose.models.Product ||  mongoose.model('Product', ProductsSchema)