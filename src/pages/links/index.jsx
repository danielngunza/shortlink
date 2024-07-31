import { useState, useEffect } from 'react'
import './links.css'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import { getLinkSave } from '../../servicos/storelink'

function Links() {

  const [myLinks, setMylinks] = useState([])
  const [data, setData] = useState({})
  const [showModa, setShowModal] = useState(false)
  
  useEffect(() => {
    async function getLinks(){

      const result = await getLinkSave('@encurtalink')
      if(result.length === 0){
        console.log("LISTA VASZIA")
      }
      setMylinks(result)
    }
    getLinks()
  }, [])




  return (
    <div className='links-container'>
      <div className='links-header'>
       <Link to="/"> 
       <FiArrowLeft size={38} color='#fff' />
       </Link > 
        
          <h1>Meus Links </h1>
      </div>
      { myLinks.map( link => (
         <div key={link.id} className='links-item'>
        <button className='link'>
          <FiLink size={18} color='#fff' />
          {link.long_url}
        </button>
        <button className='link-delete'>
          <FiTrash size={24} color='#ff5454'/>
        </button>

      </div>
      ) )}
      
    </div>
  )
}

export default Links
