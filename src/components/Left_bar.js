import React from 'react';
import './style.css'

function Left_bar() {
    return ( 
        <div className='leftsidebarContainer'>
        <div className="left-sidebar">
        <div className="sidebar-header">
            <h1>Sumit</h1>
            <span className="designation">Full Stack Developer</span>
        </div>
        <img className="me" src="/sumit.jpg" alt="Me"/>
        <h2 className="email">hello@Sumit.design</h2>
        <h2 className="address">Base in Bhopal, MP</h2>
        <p className="copyright">© 2024 Sumit. All Rights Reserved</p>
        <ul className="social-profile">
            <li>
                <a href=""><i className="lab la-twitter"></i></a>
            </li>
            <li>
                <a href=""><i className="lab la-dribbble"></i></a>
            </li>
            <li>
                <a href=""><i className="lab la-instagram"></i></a>
            </li>
            <li>
                <a href=""><i className="lab la-github"></i></a>
            </li>
        </ul>
        <a href="#" className="theme-btn">
            <i className="las la-envelope"></i> Hire Me!
        </a>
    </div>
        </div>
     );
}

export default Left_bar;