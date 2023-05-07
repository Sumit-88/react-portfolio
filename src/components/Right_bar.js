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
            <ul class="menu scroll-nav d-flex">
                <li>
                    <a class="scroll-to" onClick={() => handleClick(home)}>
                        <span>Home</span> <i class="las la-home"></i>
                    </a>
                </li>
                <li>
                    <a class="scroll-to" onClick={() => handleClick(About)}>
                        <span>About</span> <i class="lar la-user"></i>
                    </a>
                </li>
                <li>
                    <a class="scroll-to" onClick={() => handleClick(Resume)}>
                        <span>Resume</span> <i class="las la-briefcase"></i>
                    </a>
                </li>
                <li>
                    <a onClick={() => handleClick(Services)}>
                        <span>Services</span> <i class="las la-stream"></i>
                    </a>
                </li>
                <li>
                    <a class="scroll-to" onClick={() => handleClick(Skills)}>
                        <span>Skills</span> <i class="las la-shapes"></i>
                    </a>
                </li>
                <li>
                    <a class="scroll-to" onClick={() => handleClick(Portfolios)}>
                        <span>Portfolios</span> <i class="las la-grip-vertical"></i>
                    </a>
                </li>
                <li>
                    <a class="scroll-to" onClick={() => handleClick(Testimonial)}>
                        <span>Testimonial</span> <i class="lar la-comment"></i>
                    </a>
                </li>
                <li>
                    <a class="scroll-to" onClick={() => handleClick(contact)}>
                        <span>Contact</span> <i class="las la-envelope"></i>
                    </a>
                </li>
            </ul>

        </div>
    );
}

export default Right_bar;