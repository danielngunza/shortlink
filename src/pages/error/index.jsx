import './error.css'
import { Link } from 'react-router-dom'

export default function Error(){
    return(
        <div className='erro'>
            <div className='container-erro'>
                <img src="/erro.png" alt="404" width="200px" />
                <h1>Oops! Página não encontrada. Talvez ela tenha tirado uma folga.</h1>
                <Link to="/" className='buttom-link'>
                Ir para Home
                </Link>

            </div>
        </div>
    )
}