


import { useSelector } from 'react-redux';
import { Header } from './components/Header'
import Search from './components/SearchComp'
import { Links } from './components/UniversityLinks'
import { getStatus } from './feature/country/countrySilice';

import ExampleLoading from './components/Loading';
import Footer from './components/Footer';


function App() {
  const status=useSelector(getStatus);
  return (
    <>
      
        <Header/>
        
        <div className='content-box'>
     <Search/>
    {status==="loading"?   <div className='loading_div'>
                        <ExampleLoading type={"spinningBubbles"} color={"#002395"}/>
                        </div>
                      : <Links/>}
    
     
    </div>
    <Footer/>
        
    </>
  )
}

export default App
