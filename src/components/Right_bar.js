import React from 'react';
import './style.css'

function Right_bar({ handleClick }) {
    let home = 'Home';
    let About = 'About';
    let Resume = 'Resume';
    let Services = 'Services';
    let Skills = 'Skills';
    let Portfolios = 'Portfolios';
    let Testimonial = 'Testimonial';
    let contact = 'Contact';
    return (
        <div className='rightsidebarContainer'>
            <ul className="menu scroll-nav d-flex">
                <li>
                    <a className="scroll-to" onClick={() => handleClick(home)}>
                        <span>Home</span> <i className="las la-home"></i>
                    </a>
                </li>
                <li>
                    <a className="scroll-to" onClick={() => handleClick(About)}>
                        <span>About</span> <i className="lar la-user"></i>
                    </a>
                </li>
                <li>
                    <a className="scroll-to" onClick={() => handleClick(Resume)}>
                        <span>Resume</span> <i className="las la-briefcase"></i>
                    </a>
                </li>
                <li>
                    <a className="scroll-to" onClick={() => handleClick(Services)}>
                        <span>Services</span> <i className="las la-stream"></i>
                    </a>
                </li>
                <li>
                    <a className="scroll-to" onClick={() => handleClick(Skills)}>
                        <span>Skills</span> <i className="las la-shapes"></i>
                    </a>
                </li>
                <li>
                    <a className="scroll-to" onClick={() => handleClick(Portfolios)}>
                        <span>Portfolios</span> <i className="las la-grip-vertical"></i>
                    </a>
                </li>
                <li>
                    <a className="scroll-to" onClick={() => handleClick(Testimonial)}>
                        <span>Testimonial</span> <i className="lar la-comment"></i>
                    </a>
                </li>
                <li>
                    <a className="scroll-to" onClick={() => handleClick(contact)}>
                        <span>Contact</span> <i className="las la-envelope"></i>
                    </a>
                </li>
            </ul>

        </div>
    );
}

export default Right_bar;