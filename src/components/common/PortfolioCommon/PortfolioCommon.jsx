import React, {useState, useEffect} from 'react';
import {getProjectsApi} from '../../../api/projects';
import {Row, Col} from 'antd';
import {Link} from 'react-router-dom';

import './PortfolioCommon.scss';

const PortfolioCommon = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjectsApi().then(response => {
            setProjects(response.projects);
        })
    }, [])

    return (
        <> 
        <Row className="portfolio-projects">
            <Col lg={24} className="portfolio-projects__title">
                <h2>My projects</h2>
            </Col>
            <Col lg={4} />
                <Col lg={16}>
                    <Row className="row-projects">
                    {projects.map((project) => {
                        return (
                            <Col md={6} className="col-card" key={project._id}>
                                <img src={project.img} className="project-img" />
                                <h3 className="project-name">{project.name}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <h4 className="project-tech">{project.tech}</h4>
                                <a href={project.link} target="_blank" className="project-link">
                                    Go to project
                                </a>
                            </Col>
                        );
                    })}
                    </Row>
                </Col>
            <Col lg={4} />
        </Row>
        <div className="fill">
        </div>
        </>
    );
}
 
export default PortfolioCommon;