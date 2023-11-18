
import { useDispatch, useSelector } from "react-redux"
import { getCountryData } from "../feature/choosenCountry/choosenCountrySlice"
import { v4 as uuidv4 } from 'uuid';
import { getIsOpen,setIsOpen } from "../feature/open/openSlice";

export const Links = () => {
    const countryData= useSelector(getCountryData);
     const dispatch=useDispatch();
     const isOpen=useSelector(getIsOpen)
    
  const countryDataList = countryData.length>20?countryData.slice(0,20):countryData
  return (
    <div className="link_div">
        {  isOpen ?
        countryData.map((data)=>{
        return <a key={uuidv4()}
         href={data.web_pages[0]} target="-blank">{data.name}</a>
        }): countryDataList.map((data)=>{
          return  <a key={uuidv4()}
          href={data.web_pages[0]} target="-blank">{data.name}</a>
         })
        }
      
      
      {countryDataList.length===20 &&
        <button className="btn-primary"
           onClick={()=>dispatch(setIsOpen(!isOpen))}
           >{isOpen?"Show Less":"Show More..."}
          </button>
      }
    </div>
  )
}
