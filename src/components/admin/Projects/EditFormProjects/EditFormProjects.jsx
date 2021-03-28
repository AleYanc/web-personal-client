import React, {useState, useEffect} from 'react';
import {updateProjectsApi} from '../../../../api/projects'
import {Form, Input, Button, Row, Col, notification, Image, Divider} from 'antd';
import {SnippetsOutlined, AlignLeftOutlined, CodeOutlined, LinkOutlined} from '@ant-design/icons';

import NoImage from '../../../../assets/no-image.jpg';

const EditFormProjects = (props) => {
    const {project, setIsVisible, setReloadProjects} = props;
    const [projectData, setProjectData] = useState({});

    useEffect(() => {
        setProjectData({
            name: project.name,
            desc: project.desc,
            tech: project.tech,
            link: project.link,
            img: project.img
        })
    }, [project]);

    const updateProject = () => {
        let projectUpdate = projectData;

        if(!projectUpdate.name || !projectUpdate.desc || !projectUpdate.tech || !projectUpdate.link || !projectUpdate.img ) {
            notification['error']({message: "Name, description, technoligies and link to project & image are obligatory."});
            return;
        }
        updateProjectsApi( projectUpdate, project._id).then(result => {
            notification['success']({message: result.msg});
            setIsVisible(false);
        });
        

        setReloadProjects(true);
        
    }

    return ( 
        <div className="edit-project-form">
            <Image src={project.img ? project.img : NoImage }/>
            <Divider />
            <EditForm projectData={projectData} setProjectData={setProjectData} updateProject={updateProject}/>
        </div>
    );
}

function EditForm(props) {
    const {projectData, setProjectData, updateProject} = props;

    return (
        <Form className="form-edit" onFinish={updateProject}>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input prefix={<SnippetsOutlined />} placeholder="Name" value={projectData.name} onChange={e => setProjectData({...projectData, name: e.target.value})}/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input prefix={<AlignLeftOutlined />} placeholder="Description" value={projectData.desc} onChange={e => setProjectData({...projectData, desc: e.target.value})}/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input prefix={<CodeOutlined />} placeholder="Technologies" value={projectData.tech} onChange={e => setProjectData({...projectData, tech: e.target.value})}/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input prefix={<LinkOutlined />} placeholder="Link" value={projectData.link} onChange={e => setProjectData({...projectData, link: e.target.value})}/>
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <Input prefix={<LinkOutlined />} placeholder="Link" value={projectData.img} onChange={e => setProjectData({...projectData, img: e.target.value})}/>
            </Form.Item>
            
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Update user
                </Button>
            </Form.Item>
        </Form>
    )
}
 
export default EditFormProjects;