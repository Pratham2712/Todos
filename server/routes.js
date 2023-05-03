import express from 'express'

const route = express.Router();

route.post('/posts',(req,res) => {
    console.log(req.body);
})

export default route;