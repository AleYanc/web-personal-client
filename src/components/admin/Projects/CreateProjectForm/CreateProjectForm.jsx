import React, {useState} from 'react';
import {uploadProjectsApi} from '../../../../api/projects';
import {Form, Input, Button, Row, Col, notification} from 'antd';
import {SnippetsOutlined, AlignLeftOutlined, CodeOutlined, LinkOutlined} from '@ant-design/icons';

import './CreateProjectForm.scss';

const CreateProjectForm = (props) => {
    const {setIsVisible, setReloadProjects} = props;
    const [projectData, setProjectData] = useState({});

    const createProject = () => {
        if(!projectData.name || 
            !projectData.desc || 
            !projectData.tech || 
            !projectData.link || 
            !projectData.img) {
            notification['error']({message: 'All inputs are obligatory'});
        } else {
            uploadProjectsApi(projectData).then(response => {
                notification['success']({message: response.msg});
                setIsVisible(false);
                setReloadProjects(true);
                setProjectData({});
            }).catch(err => {
                notification['error']({message: err});
            });
            console.log(projectData)
        }
    }

    return (
        <CreateForm projectData={projectData} setProjectData={setProjectData} createProject={createProject}/>
    );
}

function CreateForm(props) {
    const {projectData, setProjectData, createProject} = props;
    const { TextArea } = Input;

    return(
        <Form className="form-add" onFinish={createProject}>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input prefix={<SnippetsOutlined />} placeholder="Name" value={projectData.name} onChange={e => setProjectData({...projectData, name: e.target.value})}/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input prefix={<LinkOutlined />} placeholder="Image link" value={projectData.img} onChange={e => setProjectData({...projectData, img: e.target.value})}/>
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
                <TextArea rows={4} placeholder="Description" value={projectData.desc} onChange={e => setProjectData({...projectData, desc: e.target.value})}/>
            </Form.Item>
            
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Create project
                </Button>
            </Form.Item>
        </Form>
    )

}
 
export default CreateProjectForm;