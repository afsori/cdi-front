import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ContentSearching(props) {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
      const fetchPost = async () =>{
          setLoading(true)
          const res = await Axios.get('https://jsonplaceholder.typicode.com/posts')
            setPost(res.data)
            setLoading(false)
      }
      fetchPost()
  });
setTimeout(()=>{
    if(loading){
        return  <p>Loading....</p>
      }
},2000)
  const hasilnya = post.filter(res =>{
      return res.title.toLowerCase().includes(search.toLowerCase())
  })
//   console.log(hasilnya)

  return (
      <div>
          <Link to="/">Back</Link>
        <input className="mb-3 mt-3" placeholder="searching now" onChange={e => setSearch(e.target.value)}/>
          {
              hasilnya.map(pos =>{
              return    <ul key={pos.id} className="list-group mb-2">
                            <li className="list-group-item">{pos.title}</li>
                        </ul>
              })
          }
      </div>
  )
}

export default ContentSearching;