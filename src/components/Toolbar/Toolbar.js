import React from 'react';
import './Toolbar.css'


const tbar = props => (
        <nav className="toolbar">
            <div className ="my-name">Shmuel Berman</div>
            <a href="#" className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    </a>
            <div className="toolbar-links">
                <ul>
                    <li ><a href="#">CV</a></li>
                    <li><a href="#">Publications</a></li>
                </ul>
            </div>
        </nav>
);

export default tbar;