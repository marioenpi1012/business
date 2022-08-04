import dbConnect from "../../../util/mongo"
import Product from "../../../models/Product"
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product as PRODUCT } from "../../../additional";
export default async function handler(req:NextApiRequest, res:NextApiResponse){
    const {method,query:{id},cookies} = req;
    const token = cookies.token
    await dbConnect()
    if(method === 'GET'){
        try{
            const product : PRODUCT = await Product.findById(id)
            res.status(200).json(product)
        }catch(err){
            res.status(500).json(err)
        }
    }
    if(method === 'PUT'){
        if(!token || token !== process.env.TOKEN){
            return res.status(401).json("Not authenticated")
        }
        try{
            const product : PRODUCT = await Product.findByIdAndUpdate(id,req.body,{new:true});
            res.status(200).json(product)
        }catch(err){
            res.status(500).json(err)
        }
    }
    if(method === 'DELETE'){
        if(!token || token !== process.env.TOKEN){
            return res.status(401).json("Not authenticated")
        }
        try{
            const product : PRODUCT = await Product.findByIdAndDelete(id);
            res.status(200).json(` Product ${product} has been deleted.`)
        }catch(err){
            res.status(500).json(err)
        }
    }
}