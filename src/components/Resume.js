import React, { forwardRef } from 'react';

function Resume({text},ref) {
    return ( 
        <div ref={ref}className='mainBlock'>{text}
        <section className="resume-area page-section scroll-to-page" id="resume">
                    <div className="custom-container">
                        <div className="resume-content content-width">
                            <div className="section-header">
                                <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                    <i className="las la-briefcase"></i> Resume
                                </h4>
                                <h1 className="scroll-animation" data-animation="fade_from_bottom">Education &amp; <span>Experience</span></h1>
                            </div>
        
                            <div className="resume-timeline">
                                <div className="item scroll-animation" data-animation="fade_from_right">
                                    <span className="date">2020 - Present</span>
                                    <h2>Framer Desinger &amp; Developer</h2>
                                    <p>Brunodee Agency</p>
                                    <h2>Front-End WordPress Developer</h2>
                                    <p>Envato Market</p>
                                </div>
                                <div className="item scroll-animation" data-animation="fade_from_right">
                                    <span className="date">2013 - 2019</span>
                                    <h2>Webflow Developer &amp; Co-Founder</h2>
                                    <p>Designflow Studio</p>
                                    <h2>Web Designer</h2>
                                    <p>Freelance</p>
                                    <h2>Leader Team of Marketing</h2>
                                    <p>AHA Marketing Agency</p>
                                </div>
                                <div className="item scroll-animation" data-animation="fade_from_right">
                                    <span className="date">2010 - 2013</span>
                                    <h2>Bachelor Degree of Information Technology</h2>
                                    <p>US RMIT University</p>
                                </div>
                            </div>
        
                        </div>
                    </div>
                </section>
        </div>
     );
}

export default forwardRef(Resume);