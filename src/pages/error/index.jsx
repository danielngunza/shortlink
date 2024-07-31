import './error.css'
import { Link } from 'react-router-dom'

export default function Error(){
    return(
        <div className='erro'>
            <div className='container-erro'>
                <img src="/erro.png" alt="404" width="200px" />
                <h1>Pagina não encontrada!</h1>
                <Link to="/" className='buttom-link'>
                Voltar para Home
                </Link>

            </div>
        </div>
    )
}