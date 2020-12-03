import React from 'react'
import './paginate.scss';
function contentPagination({posts,loading,name}) {
    setTimeout(()=>{
        if(loading){
            return <h2>Loading....</h2>
         }
    },2000)
   console.log('ini hadil',posts)
    return (
        <div>
            {posts.map(data =>{
                return(
                    <ul key={data.id} className="list-group mb-2">
                        <li className="list-group-item">{data.title}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default contentPagination
