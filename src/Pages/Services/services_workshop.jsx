import React, {useState,useEffect} from "react";
import axios from "axios";
import Posts from "../Services/workshop_data";
import Pagination from "../Services/worksop_pagination";
function ServicesWorkshop()
{
    const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

        //call when component is mount.
    useEffect(() => {
        //function decalaration
        const fetchPosts = async () => {
          setLoading(true);
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
          setPosts(res.data);
          setLoading(false);
        };
    
        fetchPosts(); //calling function
      }, []);

//get current posts....
   
  const indexOfLastPost = currentPage * postsPerPage; //give index of last
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    // console.log(indexOfFirstPost); ==0
    // console.log(indexOfLastPost); ==10
// console.log(postPerPage);
// console.log(posts);

//change page
const paginate = pageNumber => setCurrentPage(pageNumber);


    return  <div className='container mt-5'>
    <h1 className='text-primary mb-3'>Workshops and Event at different places</h1>
    <Posts posts={currentPosts} loading={loading} />
    <Pagination
      postsPerPage={postsPerPage}
      totalPosts={posts.length}
      paginate={paginate}
    />
  </div>
}
export default ServicesWorkshop;