


import { Header } from './components/Header'
import Search from './components/SearchComp'
import { Links } from './components/UniversityLinks'

function App() {
 
  return (
    <>
      
        <Header/>
        
        <div className='content-box'>
     <Search/>
     <Links/>
        
     
    </div>
        
    </>
  )
}

export default App
