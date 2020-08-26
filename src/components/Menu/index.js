import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/logo.png';
import './Menu.css'

function Menu(){ 
    return (
        
            <nav className='Menu'>

              <Link to="/home">  
                <img src={Logo} className='Logo' alt='animeflix logo'/>            
                </Link> 
                <Link as={Link} className='ButtonLink' to='/cadastro/video'>
                    Novo vídeo
                </Link>

            </nav>
    )
}

export default Menu;