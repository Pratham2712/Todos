import axios from 'axios'

const Api = 'http://localhost:5000'
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

