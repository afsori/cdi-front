import React from 'react'

export default function Pagination({postPerPage, totalPost,paginate}) {
    const pageNumber=[];

    for(let i = 1; i <= Math.ceil(totalPost / postPerPage); i++){
        pageNumber.push(i)
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(number =>{
                   return <li key={number}>
                       <button onClick={()=> paginate(number)} className="page-link">
                            {number}
                       </button>
                   </li>
                })}
            </ul>
        </nav>
    )
}