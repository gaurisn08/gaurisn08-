import { useParams,useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const Blogdetails = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const {data:blog,der,error}=useFetch('http://localhost:9900/blogs/'+id)
    const handleClick = () => {
      fetch('http://localhost:9900/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(() => {
        navigate('/');
      }) 
    }
    return (<article>
            {error && <div>{error}</div>}
            {der && <div>Loading...</div>}
            
            {blog && (<article>  <h2>{blog.title}</h2>
            <h4>Written by: {blog.author}</h4>
            <p>{blog.body}</p>
            <button onClick={handleClick}>delete</button>
            </article>
            )
        }
          </article>
     
     );
}
 
export default Blogdetails;