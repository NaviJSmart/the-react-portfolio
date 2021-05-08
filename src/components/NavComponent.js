import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const NavComponent = () => {
    return (
        <CSSNav className="nav">
            <div className="logo">
                <a href="#" className="logo__link">JSmart</a>
            </div>
            <ul className="menu">
                <li className="menm__item">
                    <Link to="/" className="menu__link">About</Link>
                </li>
                <li className="menm__item">
                    <Link to="/work" className="menu__link">Projects</Link>
                </li>
                <li className="menm__item">
                    <Link to="/contact" className="menu__link">Contact</Link>
                </li>
                
            </ul>
            
        </CSSNav>
    )
}

const CSSNav = styled.nav`
    background-color:#1b1b1b;
    position: fixed;
    width: 100%;
    display: flex;
    margin:auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    a{
        color: #fff;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
        li {
            margin-left: 3rem;
            font-size: 1.3rem;
        }
    }
    .logo__link {
        font-family: 'Girassol', cursive;
        font-size: 2rem;
        letter-spacing: 3px;
        
    }
`

export default NavComponent
