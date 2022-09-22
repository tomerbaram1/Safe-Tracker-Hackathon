const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.delete("/:id",async(req,res) =>{
 await User.findByIdAndRemove({ _id: req.params.id })
 return res.send('user deleted')
})

router.get("/",async(req,res)=>{
	const users = await User.find({})
	return res.send(users)
})

router.post("/", async (req, res) => {
	try {
		
		const user = await User.findOne({ email: req.body.email });
		
		if (user){
			console.log('2')
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" })};
				
		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});



router.put('/:id',async(req,res)=>{
	try {
		 const updatedResult = await User.findByIdAndUpdate(
		 req.params.id,
		 {$push: {"children": {childname: req.body.childname, phone: req.body.phone, location: req.body.location}}},
		 {safe: true, upsert: true, new : true})
		 return res.send(updatedResult)
         }catch(error){
			 console.log(error);
}

});



module.exports = router




