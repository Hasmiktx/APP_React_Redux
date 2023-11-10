import { useDispatch, useSelector } from "react-redux";
import { fetchURL, getError, getStatus} from "../feature/country/countrySilice";
import { useEffect } from "react";

import InputComp from "./Input";



const Search = () => {

    
    
    const dispatch = useDispatch();
    
    
    const status=useSelector(getStatus);
    const errors=useSelector(getError);

    
    useEffect(() => {
     
      dispatch(fetchURL());
      // console.log(listData,"listData");
      console.log(status,errors)
    },[])


  return (
    <div className="search-div">
    
        <InputComp/>


  </div>
  
  )
}

export default Search