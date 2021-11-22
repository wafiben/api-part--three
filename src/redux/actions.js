import axios from "axios"

  const GETUSERS=()=>async(dispatch)=>{
  dispatch({type:'GET_REQUEST'})
  axios.get("https://reqres.in/api/users?page").then((response)=>{
      dispatch({type:'GET_REQUEST_SUCCESS',payload:response.data.data})
  })
  .catch((error)=>{
    dispatch({type:'GET_REQUEST_FAIL',payload:error})
  })

}
export default GETUSERS;
