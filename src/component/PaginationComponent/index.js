import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContentPagination } from "component";
import Pagination from "component/ContentPagination/Pagination";
import { Link } from "react-router-dom";
import "./paginationcomp.scss";
import Footer from "component/Footer";
import Header from "component/Header";

const PaginationComponent = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  // console.log(post)
  //Get Current  Post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setcurrentPage(pageNumber);
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div className="wrapper-title-paginate">
          <Link to="/">Back</Link>
          <h3 className="text-primary mb-2">This is my Blog</h3>
          {/* <input onChange={e => setQuery(e.target.value)} placeholder="searching now"/> */}
        </div>
        <ContentPagination
          hasil={currentPost}
          posts={currentPost}
          loading={loading}
        />
        <Pagination
          postPerPage={postPerPage}
          totalPost={post.length}
          paginate={paginate}
        />
      </div>
      <Footer />
    </div>
  );
};

export default PaginationComponent;
