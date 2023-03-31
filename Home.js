import useFetch from "./useFetch"
import BlogList from "./Bloglist.js"

const Homepage = () => {
    // const handleClick=function(){
    //     setName("karak")
    // }
    
    // const handleDelete=(id)=>{
    //   const newBlogs=blogs.filter(blog=>blog.id!==id)
    //   setBlogs(newBlogs);
    // }

    // Props is a special keyword in React, which stands for properties and is being used for passing data from one component to another.

    // But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child)
    
    // Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.
    const {data:blogs,der,error}=useFetch("http://localhost:9900/blogs");
  
    //useEffect is used to run any kind of code for every render
    //useeffect dependencies allow us to run code only when rendering occurs due to specific things
    return ( <div className="homepage">
        {error && <div>{error}</div>}
        {der && <div>Wait!!</div>}
        {blogs && <BlogList blogs={blogs}/>}
         </div> 
         )
}
 
export default Homepage;