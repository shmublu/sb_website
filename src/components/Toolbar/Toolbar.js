import React, {useState} from 'react';
import './Toolbar.css';


function Toolbar(props) {
    const[hamburgerMenu, setHamMenu]= useState(false);
    function getHamClasses() {
        var hm = "hamOff"
        if(hamburgerMenu){
            hm="hamOn"
        }
        return [hm, "toolbar-links"].join(' ');
    }
    return (
        <nav className="toolbar">
            <div className ="my-name">shmuel berman  {hamburgerMenu}</div>
            <a href="#" onClick ={()=>{setHamMenu(!hamburgerMenu);
            console.log(hamburgerMenu);    
            }}className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    </a>
            <div className={getHamClasses()}>
                <ul>
                    <li ><a href="#">home</a></li>
                    <li ><a href="#">cv</a></li>
                    <li><a href="#">github</a></li>
                </ul>
            </div>
        </nav>
)
}

export default Toolbar;