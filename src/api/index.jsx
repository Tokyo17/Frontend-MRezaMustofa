import { useEffect, useState } from "react";

const UseApi=()=>{

    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)

    const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch('https://optimum-corgi-31.hasura.app/api/rest/restaurant');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setData(data);
        } catch (error) {
         console.log(error)
        } finally {
          setLoading(false);
        }
      };
    
    useEffect(()=>{
        fetchData()
    },[])
    
    return { data, loading };
}

export default UseApi

