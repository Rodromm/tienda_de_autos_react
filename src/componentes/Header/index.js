import React from 'react'
import masterAuto from "../../imagenes/Master auto transp.png"

export const Header = () => {
    return (
    
        <header>
           
            <a href="#">
                <div className='logo'>
                    <img src={masterAuto} alt='logo' width="150"/>
                </div>
            </a>

            <ul>
                <li>
                    <a href='#'>INICIO</a>
                </li>
                <li>
                    <a href='#'>Productos</a>
                </li>
            </ul>

            <div className='cart'>
                <box-icon name="cart"></box-icon>
                <span className='item__total'>0</span>
            </div>
        </header>
            
        
    )
}