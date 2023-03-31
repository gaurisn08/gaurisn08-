import { useState,useEffect} from "react";

const useFetch=(url)=>{
  const abortCont=new AbortController();
    const [data, setData] = useState(null)
    const [der,setLoader]=useState(true);
    const [error,setError]=useState(null)
    useEffect(()=>{
        fetch(url,{signal:abortCont.signal}).then(res=>{
          if(!res.ok){
            throw Error("Unable to fetch data!!")
          }
          return res.json()
        })
        .then(data=>{
          setLoader(false);
          setData(data)
        })
        .catch((err)=>{
          if(err.name==='AbortError'){
            console.log('fetch aborted');
          }
          else{
          setLoader(false);
          setError(err.message)
          }
        })
      },[]);

      return {data,der,error};
}

export default useFetch;