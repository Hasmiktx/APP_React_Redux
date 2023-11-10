
import { useSelector } from "react-redux"
import { getCountryData } from "../feature/choosenCountry/choosenCountrySlice"
import { v4 as uuidv4 } from 'uuid';

export const Links = () => {
    const countryData= useSelector(getCountryData);
  return (
    <div className="link_div">
        {countryData.map((data)=>{
        return <a key={uuidv4()}
         href={data.web_pages[0]} target="-blank">{data.name}</a>
      })} 
    </div>
  )
}
