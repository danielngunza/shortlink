import { useState, useEffect } from 'react'
import './links.css'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import { getLinkSave, deleteLink } from '../../servicos/storelink'
import Modal from '../../components/Modal'


function Links({closeModal, content}) {

  const [myLinks, setMylinks] = useState([])
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  const [emptyLink, setEmptyLink] = useState(false)
  
  useEffect(() => {
    async function getLinks(){

      const result = await getLinkSave('@encurtalink')
      if(result.length === 0){
        setEmptyLink(true)
      }
      setMylinks(result)
    }
    getLinks()
  }, [])

function handleOpenLink(link){
    setData(link)
    setShowModal(true)
}

async function handleDelete(id){

  const result= await deleteLink(myLinks, id)

  if(result.length === 0){
    console.log("LISTA VAZIA")
    setEmptyLink(true)
  }
 setMylinks(result)
}
  return (
    <div className='links-container'>
      <div className='links-header'>
       <Link to="/"> 
       <FiArrowLeft size={38} color='#fff' />
       </Link > 
        
          <h1>Meus Links </h1>
      </div>

      {emptyLink && (
        <div className="empty">
          <img src="/caixa-vazia.png" alt="Sem Lonks" width={250} />
          <h2 className='empty-text'>Sem links na lista...</h2>
        </div>
      )}

      { myLinks.map( link => (
         <div key={link.id} className='links-item'>
        <button className='link'onClick={() => handleOpenLink(link)}>   
          <div>
            <FiLink size={18} color='#fff' />
          </div>
          {link.long_url}
          
        </button>
        <button className='link-delete' onClick={ () => handleDelete(link.id)}>
          <FiTrash size={24} color='#ff5454'/>
        </button>

      </div>
      ) )}
      
      {showModal && (
        <Modal
        closeModal={()=>setShowModal(false)}
        content={data}
        /> 
      )}
    </div>
  )
}

export default Links
