import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const Side = styled.div`
    position: fixed;
    top: 2em;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100vh;
    width: 10vw;
    min-width: 120px;
    text-align: center;
    a{
        text-decoration: none;
        font-weight: 300;
        margin-top: 1em;
        border-radius: 5px;

    }
    a:visited{
        color: white;

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