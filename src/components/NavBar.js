import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const Side = styled.div`
    position: fixed;
    top: 4em;
    left : 1em;
    display: flex;
    flex-direction:column;
    flex-wrap:wrap;
    padding: 0.6em 1em;
    background-color: white;
    border-radius: 5px;
    a{
        text-decoration: none;
        color: #0008fc;
        text-transform: uppercase;
        font-size: 1em;
        text-align: center;
        font-weight: 600;
    }
    a:not(:last-child) {
  margin-bottom: 20px;
}
`

const NavBar = () => (
    <div>
        <Side>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
        </Side>
    </div>
)

export default NavBar