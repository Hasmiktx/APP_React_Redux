
import { useSelector,useDispatch } from "react-redux";

import { selectData } from "../feature/country/countrySilice";
import { useEffect} from "react";

import { v4 as uuidv4 } from 'uuid';

import { addCountry, fetchByCountry, getChoosenCountry,getStatusByCountry,getErrorByCountry } from "../feature/choosenCountry/choosenCountrySlice";


const InputComp = () => {
    
    const allData=useSelector(selectData);
    const countryName = useSelector(getChoosenCountry);
    const status=useSelector(getStatusByCountry);
    const errors= useSelector(getErrorByCountry)
    const dispatch= useDispatch();
    // console.log(allData,"allData")
    
    const countyArr = allData.reduce((aggr,data)=>{
        if(!aggr.includes(data.country)){
            aggr.push(data.country)
        }
        return aggr
    },[])
    

    useEffect( ()=>{
       dispatch(fetchByCountry(countryName));
       console.log(status,errors);
    },[countryName,dispatch])
  return (
    <>
   <label>Choose  a country:</label>
   <select id="country" name="countryList" form="countryform"
          value={countryName}
          onChange={(e)=>dispatch(addCountry(e.target.value))}>
    <option value="">Select Country...</option>
              {countyArr.map((data)=>{
            return (
              <option value={data} key={uuidv4()}>{data}</option>

             )
           }
          )}
  
  </select>
  <p>Selected Country-{countryName}</p>

</>
  )
}

export default InputComp