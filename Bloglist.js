import {Link} from "react-router-dom"
const BlogList = ({blogs}) => {
    //const blogs=props.blogs
    return (
        <div className="Blog-list">

        {blogs.map(blog => (
            <div className="blog-preview" key={blog.id} >
               <Link to={`/blogs/${blog.id}`}>
               <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
               </Link>
              </div>))}
             </div> 
             )
        }
export default BlogList;

//<Link> is used to set the URL and keep track of browsing history.//

// const BlogList = ({ blogs, title}) => {
//     return (
//       <div className="blog-list">
//         <h2>{ title }</h2>
//         {blogs.map(blog => (
//           <div className="blog-preview" key={blog.id} >
//             <h2>{ blog.title }</h2>
//             <p>Written by { blog.author }</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
   
//   export default BlogList;