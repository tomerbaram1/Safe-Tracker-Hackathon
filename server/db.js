const mongoose = require('mongoose');

module.exports = () => {
   try{
   mongoose.connect(process.env.DB,{useNewUrlParser: true,
      useUnifiedTopology:true})
      console.log(`Database connected successfully`);
   
   }catch(error){ console.log(error);
     console.log("could not connect to database")}
     mongoose.Promise = global.Promise;}
