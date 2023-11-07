import { useDispatch, useSelector } from "react-redux";
import { fetchURL, getError, getStatus} from "../feature/country/countrySilice";
import { useEffect } from "react";
import{increment,decrement} from "../feature/counter/counterSlice"
import InputComp from "./Input";



const Search = () => {

    const count = useSelector((state) => state.counter.value);
    
    const dispatch = useDispatch();
    
    
    const status=useSelector(getStatus);
    const errors=useSelector(getError);

    
    useEffect(() => {
     
      dispatch(fetchURL());
      // console.log(listData,"listData");
      
    },[])


  return (
    <div className="search-div">
    <button
      aria-label="Increment value"
      onClick={() => dispatch(increment())}
    >
      Increment
    </button>
    <span>{count}</span>
    <button
      aria-label="Decrement value"
      onClick={() => dispatch(decrement())}
    >
      Decrement
    </button>
    <span>Status1:{status}</span>
    <span>Error1:{errors}</span>

    <InputComp/>


  </div>
  
  )
}

export default Search