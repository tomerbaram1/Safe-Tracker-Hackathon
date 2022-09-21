const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const passwordComplexity = require("joi-password-complexity")

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[true, 'The username text field is required']
    },
    email:{
        type: String,
        required:[true, 'The username text field is required']
    },
    password:{
        type: String,
        required:[true, 'The password text field is required']
    },
    children:[
    {childname: String,
    phone: String,
    location:String            }
]

})
UserSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY,{expiresIn:"7d"})
    return token}

const User = mongoose.model('user', UserSchema);

const validate = (data) => {
    const schema = Joi.object({
      userName: Joi.string().required().label("User Name"),  
      email: Joi.string().email.required().label("Email"),  
      password: passwordComplexity.required().label("Password")  
    });
    return schema.validate(data)
}
module.exports = {User,validate}