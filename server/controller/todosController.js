
import todo from "../models/todosModels.js"
export const postTodos = async(req,res) => {
    try {
        const newtodo = await todo.create({
            data: req.body.text,
            createdAt: Date.now()
        })
        await newtodo.save();
        return res.status(200).json(todo)
        
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
export const getTodos = async(req,res) => {
    try {
       const getall = await todo.find({}).sort({'createdAt': -1})
        return res.status(200).json(getall)
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json(error.message);
    }
}
export const toggleDone = async(req,res) => {
    try {
        
       const todoObj = await todo.findById(req.params.id);
       const update = await todo.findOneAndUpdate({_id: req.params.id},{done: !todoObj.done});
       //await todo.save();
        return res.status(200).json(update);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json(error.message);
    }
}
export const TodoUpdate = async (request, response) => {
    try {
        await todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.text }
        )

        const up = await todo.findById(request.params.id);
        return response.status(200).json(up);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const TodoDelete = async (request, response) => {
    try {
        const del = await todo.findByIdAndDelete(request.params.id);
        return response.status(200).json(del);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
