import {bcryptjs} from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import User  from  "../models/userModel.js"
export const test =(req ,res)=>{
    res.json({
        message:'Hey,API is working'
    })
}
//compare this snippet from api/routes/user.route.js;


//Update User

export const updateUser =async  (req ,res, next) =>{
    if (req.user.id !== req.params.id ) {
        return next(errorHandler(401, 'You can update only your account'));
    }
    try {
        if(req.body.password){
            req.body.password =bcryptjs.hashSync(req.body.password ,10);

        }

        const updateUser =await User.findByIdAndUpdate(
            req.params.id ,
            {
                $set : {
                    username :req.body.username,
                    email    :req.body.email,
                    password :req.body.password,
                    profilePicture :req.body.profilePicture,
                } ,
            },
            {new:true}
             );
             const {password , ...rest}=updateUser._doc ;
             res.status(200).json(rest)

    } catch (error) {
        next(error);
        
    }
}