// const express = require('express');
// const router = express.Router();
// const User = require('../models/user')

// router.get('/users',(req,res,next) => {
//     User.find({})
//     .then((data) => res.json(data))
//     .catch(next)
// });

// router.post('/users', (req,res,next) => {
//     if (req.body){
//         User.create(req.body)
//         .then((data) => res.json(data))
//         .catch(next);
//     } else {
//         res.json({
//             error: 'The input field is empty'
//         });
//     }
// });

// router.delete('/users/:id', (req,res,next) => {
//     User.findOneAndDelete({_id: req.params.id})
//     .then((data) => res.json(data))
//     .catch(next);
// });

// module.exports = router
