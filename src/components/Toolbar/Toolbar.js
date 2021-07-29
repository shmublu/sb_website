import React, {useState} from 'react';
import './Toolbar.css';
import { Link } from "react-router-dom";


function Toolbar(props) {
    const[hamburgerMenu, setHamMenu]= useState(false);
    function getHamClasses() {
        var hm = "hamOff"
        if(hamburgerMenu){
            hm="hamOn"
        }
        return hm;
    }
    return (
        <nav className="toolbar">

            <div className ="my-name">SHMUEL BERMAN</div>
            <a href="#" onClick ={()=>{setHamMenu(!hamburgerMenu);
            console.log(hamburgerMenu);    
            }}className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    </a>
            <div className={[getHamClasses(), "toolbar-links"].join(' ')}>
                <ul>
                    <li ><Link to="/">home </Link></li>
                    <li ><Link to="/resume">cv</Link></li>
                    <li><a href="https://github.com/shmublu/">github</a></li>
                </ul>
            </div>
        </nav>
)
}

export default Toolbar;