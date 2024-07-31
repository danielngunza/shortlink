import './home.css'
import {FiLink} from 'react-icons/fi'
import Menu from '../../components/Menu'
import { useState } from 'react'
import Modal from '../../components/Modal'
import api from '../../servicos/api'
import {saveLink} from '../../servicos/storelink'

function Home() {

  const [link, setLink] = useState ("")
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState({})

 async function handleShortLink(){
      try {
        const response = await api.post('/shorten', {
          long_url: link
        })

        setData(response.data);
        setShowModal(true)

        saveLink('@encurtalink', response.data)

        setLink("")

      } catch {
        alert("Ops... Parece que algo deu errado!")
        setLink("")
      }
  }

  return (
    <div className='container-home'>

      

      <div className='logo'>
        <img src="/link.png" alt="ShortLink Logo" width={150} />
        <h1>ShortLink</h1>
        <span>Deixe seus links mais curtos e charmosos em apenas um clique!</span>
      </div>

      <div className='area-input'>
          <div>
            <FiLink size={24} color='#fff'/>
          <input placeholder='Cole seu link aqui...' 
          value={link}
          onChange={(e) => setLink(e.target.value)}
          />
          </div>
          <button onClick={handleShortLink}>
            Encurtar link
            </button>
      </div>
      <Menu></Menu>
       
       {showModal &&(
        <Modal
         closeModal={() =>setShowModal(false)}
         content={data}
         ></Modal>
       )}
      
    </div>
  )
}

export default Home
