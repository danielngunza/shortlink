import './modal.css'
import { FiX, FiClipboard } from 'react-icons/fi'
export default function Modal({closeModal, content}){


   async function copyLink(){  
    await navigator.clipboard.writeText(content.link)
    alert("Link copiado com sucesso!")
    }

    return(


        <div className='modal-container'>
            <div className="modal-header">
            <h2>Link Encurtado</h2>
            <button onClick={closeModal}>
                <FiX size={28} color='#000'></FiX>
            </button>
            </div>
            <span>
                {content.long_url}
            </span>
            <button className='modal-link' onClick={copyLink}>
                {content.link}
                <FiClipboard size={20} color='#fff' />
            </button>
        </div>
    )
}