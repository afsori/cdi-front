const initialState = {
    getAllData:[],
    isLoading:false,
    isRejected:false,
    isFullfiled:false
}

const post = (prevState = initialState, action)=>{
    console.log('ini action action',action)    
    switch(action.type){
        case "GET_DATA_PENDING":
        return{
            ...prevState,
            isLoading:true,
            isRejected:false,
            isFullfiled:false
        }
        case "GET_DATA_REJECTED":
        return{
            ...prevState,
            isLoading:false,
            isRejected:true
        }
        case "GET_DATA_FULLFILED":
            return{
                ...prevState,
                isLoading:false,
                isFullfiled:true,
                getAllData:action.payload.data
        }
        default:
            return prevState
    }

}

export default post