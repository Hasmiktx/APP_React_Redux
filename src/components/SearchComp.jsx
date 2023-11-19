import { useDispatch, useSelector } from "react-redux";
import { fetchURL, getError, getStatus} from "../feature/country/countrySilice";
import { useEffect } from "react";

import InputComp from "./Input";
import { useState } from "react";




const Search = () => {
const [isScrolled,setIsScrolled]=useState(false);
    
    
    const dispatch = useDispatch();
    
    
    const status=useSelector(getStatus);
    const errors=useSelector(getError);

    
    useEffect(() => {
     
      dispatch(fetchURL());
      // console.log(listData,"listData");
      console.log(status,errors)

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // console.log(scrollPosition,"Scroll")
        if (scrollPosition > window.innerHeight/2) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  
    },[])


  return (
    <div className={`search-div ${isScrolled ? 'scrolled' : ''}`}>
    
        <InputComp/>
        


  </div>
  
  )
}

export default Search