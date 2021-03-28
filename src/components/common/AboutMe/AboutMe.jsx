import React from 'react';
import {Divider, Button} from 'antd';

import './AboutMe.scss';

const AboutMe = () => {

    return ( 
        <div className="container">
            <Divider />
            <div className="section-1">

            </div>
            <h1 className="title">About me</h1>
            <div className="bio">
                <p>I have always found the process of learning more about technology interesting. By disassembling and assembling computers 
                    I managed to fully understand how they work; in books and internet material, I found the way to translate my ideas into code (Front-End) and, on my own, 
                    I’ll continue training myself in technologies I would also like to master 
                    (Back-End, Data Science, Software Engineering). I consider myself a fast learner, and I'm always seeking new knowledge.</p>
            </div>
            <div>
                <h2 className="why-code">Why do I code?</h2>
                <p className="code-paragraph">I really like being able to translate my ideas into code. It doesn't matter if I don't have the necessary knowledge yet, or if I have a lot of mistakes, 
                    the learning process is always present and I do my best to absorb everything I practice. </p>
                <p className="code-paragraph">Whether it is a simple code error, a missing semicolon, or a complex endpoint that is not working, the sense of victory I feel when I manage to fix them is incomparable, 
                    and it is what motivates me to keep learning and striving to grow as a developer.</p>
            </div>

            <Divider />

            <h1 className="section-title">Skills</h1>
            <div className="skills">
                <div className="skill">
                    <h3>React</h3>
                    <i className="animated-icon fab fa-react"></i>
                </div>
                <div className="skill">
                    <h3>HTML</h3>
                    <i className="animated-icon fab fa-html5"></i>
                </div>
                <div className="skill">
                    <h3>CSS</h3>
                    <i className="animated-icon fab fa-css3-alt"></i>
                </div>
                <div className="skill">
                    <h3>JavaScript</h3>
                    <i className="animated-icon fab fa-js-square"></i>
                </div>
                <div className="skill">
                    <h3>NodeJS</h3>
                    <i className="animated-icon fab fa-node-js"></i>
                </div>
            </div>

            <div className="studies-exp">
                <div className="studies">
                    <h2>Studies</h2>
                    <Divider />
                    <div className="study">
                        <h3 className="study-title">Buenas Nuevas School <span className="date">(2013-2018)</span> </h3>
                        <p className="degree">Bachelor in Communication</p>
                    </div>

                    <div className="study">
                        <h3 className="study-title">University of Buenos Aires <span className="date">(2020-Present day)</span> </h3>
                        <p className="degree">Bachelor in Communication</p>
                    </div>

                    <div className="study">
                        <h3 className="study-title">Lingua Academy of Languages <span className="date">(2013-2019)</span> </h3>
                        <p className="degree">B2+ English - First Certificate (Cambridge)</p>
                    </div>
                </div>

                <div className="experience">
                    <h2>Experience</h2>
                    <Divider />
                    <div className="exp">
                        <h3 className="exp-title">Technical Service for Computers <span className="date">(2018-Present day)</span></h3>
                        <p className="exp-desc">Assembly, maintenance, cleaning and installation of desktop and laptop computers. 
                        I started assembling and fixing equipment for relatives, and at the moment I have published my service on the internet. 
                        My clients are satisfied with the attention and the work I provide.</p>
                    </div>

                    <div className="exp">
                        <h3 className="exp-title">Web Development Practice <span className="date">(2019-Present day)</span></h3>
                        <p className="exp-desc">I study mainly HTML, CSS, JS, and React. 
                        I’m learning Node for backend, but I focus in Front End principally. My goal is to continue studying to become a good Full Stack Developer.</p>
                    </div>
    
                </div>
            </div>

            <h1 className="section-title">Interests</h1>
           
            <div className="interests">
                <div className="interest">
                    <h3>Writing</h3>
                    <i className="fas fa-book"></i>
                </div>

                <div className="interest">
                    <h3>Music</h3>
                    <i className="fas fa-music"></i>
                </div>

                <div className="interest">
                    <h3>Astronomy</h3>
                    <i className="fas fa-meteor"></i>
                </div>

                <div className="interest">
                    <h3>Programming</h3>
                    <i className="fas fa-code"></i>
                </div>

                <div className="interest">
                    <h3>VideoGames</h3>
                    <i className="fas fa-gamepad"></i>
                </div>

                <div className="interest">
                    <h3>Tech & Hardware</h3>
                    <i className="fas fa-microchip"></i>
                </div>
            </div>

            <div className="btn">
                <Button type="primary"><a href="https://drive.google.com/file/d/1DcK0L9ME9otrkbg2rkazyUcApBmrY5BJ/view?usp=sharing" target="_blank">Download my CV</a></Button>
            </div>

            <div className="website">
                <h4>This website was made with the MERN stack</h4>
            </div>
        </div>
    );
}
 
export default AboutMe;