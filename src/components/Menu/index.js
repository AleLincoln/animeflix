import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/logo.png';
import Button from '../Button'
import './Menu.css'

function Menu(){ 
    return (
        
            <nav className='Menu'>
              <Button as={Link} className='ButtonLink' to='/cadastro/categoria'>Nova categoria</Button>

              <Link to="/home">  
                <img src={Logo} className='Logo' alt='animeflix logo'/>            
                </Link>

              <Button as={Link} className='ButtonLink' to='/cadastro/video'>Novo vídeo</Button>

            </nav>
    )
}

export default Menu;