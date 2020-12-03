import axios from 'axios';

export const getAllData = () =>{
    return{
        type:"GET_DATA",
        payload:axios.get("http://localhost:3004/posts?_sort=id&_order=desc")
    };
}

// export const getById = id => {
//     return {
//       type: "GET_BYID",
//       payload: axios.get(
//         `hhttp://localhost:3004/posts?_sort=id&_order=desc=${id}`
//       )
//     };
//   };