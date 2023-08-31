// const mongoose = require ('mongoose')
// module.exports=mongoose=>{
//     const users=mongoose.module("users",mongoose.Schema({
//         userid:{type:Number},
//         email:String,
//         first_name:String,
//         last_name:String,
//         username:String,
//         contact:String,
//         password:String,
//         role:String,
//         isLoggedIn:Boolean,
//         uuid:String,
//         accesstoken:String
//     },
//     {timestampe:true}
        
//     ))
//     return users;
// }

module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
          {
            userid : Number,
            email: String,
            first_name : String,
            last_name : String,
            username:String,
            contact: String,
            password: String,
            role: {type: String, default: 'user'}, /*types: admin ,user*/
            uuid : String,
            accesstoken : String,
            isLoggedIn: Boolean,
            coupens: Array,
            bookingRequests: Array
          },
          { timestamps: true }
        )
      );
    
      return User;
    };

// module.exports = mongoose.model('users', mongoose)