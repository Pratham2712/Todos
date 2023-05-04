import express from 'express'
import { postTodos,getTodos,toggleDone,TodoUpdate,TodoDelete } from './controller/todosController.js';

const route = express.Router();

route.post('/posts',postTodos);
route.get('/posts',getTodos);
route.get('/posts/:id',toggleDone);
route.put('/posts/:id',TodoUpdate);
route.delete('/posts/:id',TodoDelete);

export default route;