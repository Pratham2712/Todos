import axios from 'axios'
//https://todos-pg7k.onrender.com/posts
const Api = 'https://todos-pg7k.onrender.com'
//const Api = 'http://localhost:5000'
export const addtodos = (text)  => async (dispatch) =>  {
    try{

        const {data} = await axios.post(`${Api}/posts`,{text})
    
        dispatch({
            type: 'ADDTODOS',
            payload: data
        });
    }catch(err){
        console.log(err.message)
    }

}
export const getTodos = ()  => async (dispatch) =>  {
    try{

        const {data} = await axios.get(`${Api}/posts`)
        console.log(data);
    
        dispatch({
            type: 'GETTODOS',
            payload: data
        });
    }catch(err){
        console.log(err.message)
    }
}
export const toggletodo = (id)  => async (dispatch) =>  {
    try{

        const {data} = await axios.get(`${Api}/posts/${id}`)
    
        dispatch({  
            type: 'TOGGLEDONE',
            payload: data
        });
    }catch(err){
        console.log(err.message)
    }

}
export const updateTodo = (id,text)  => async (dispatch) =>  {
    try{
        
        const {data} = await axios.put(`${Api}/posts/${id}`,{text})
    
        dispatch({  
            type: 'UPDATETODO',
            payload: data
        });
    }catch(err){
        console.log(err.message)
    }

}
export const deleteTodo = (id)  => async (dispatch) =>  {
    try{
        
        const {data} = await axios.delete(`${Api}/posts/${id}`)
    
        dispatch({  
            type: 'DELETETODO',
            payload: data
        });
    }catch(err){
        console.log(err.message)
    }

}

