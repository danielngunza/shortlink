import './menu.css'
import {BsGithub, BsLinkedin } from 'react-icons/bs'
import {Link} from 'react-router-dom'

function Menu(){
    return(
        <div className='menu'>
           
           <a href="https://www.linkedin.com/in/daniel-ngunza-7a322130a/" className='social' target='_blank'><BsGithub color='#ffff' size={25}/></a>
           <a href="https://github.com/danielngunza" className='social' target='_blank'><BsLinkedin color='#ffff' size={25}/></a>

           <Link to="/MyLinks" className='menu-link'>
           Meus Links
           </Link>
        </div>
    )
}
export default Menu