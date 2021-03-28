import React, {useState} from 'react';
import { Form, Input, Select, Button, Row, Col, notification} from 'antd';
import {UserOutlined, MailOutlined, LockOutlined} from '@ant-design/icons';
import {getAccessTokenApi} from '../../../../api/auth';
import {createUserApi} from '../../../../api/user';
import create from '@ant-design/icons/lib/components/IconFont';

import './CreateUserForm.scss';

const CreateUserForm = (props) => {
    const {setIsVisible, setReloadUsers} = props;
    const [userData, setUserData] = useState({});

    const createUser = () => {
        if(!userData.name || 
            !userData.lastname || 
            !userData.role || 
            !userData.email || 
            !userData.password || 
            !userData.repeatPassword) {
            notification['error']({message: 'All inputs are obligatory'});
        } else if (userData.password !== userData.repeatPassword) {
            notification['error']({message: 'Passwords must be equal'});
        } else {
            const token = getAccessTokenApi();
            createUserApi(token, userData).then(response => {
                notification['success']({message: response.msg});
                setIsVisible(false);
                setReloadUsers(true);
                setUserData({});
            }).catch(err => {
                notification['error']({message: err});
            })
        }
    }

    return ( 
        <div className="add-user-form">
            <CreateForm userData={userData} setUserData={setUserData} createUser={createUser}/>
        </div>
    );
}

function CreateForm(props) {
    const {userData, setUserData, createUser} = props;
    const { Option } = Select;

    return (
        <Form className="form-add" onFinish={createUser}>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input 
                            prefix={<UserOutlined />}
                            placeholder="Name"
                            value={userData.name}
                            onChange={e => setUserData({...userData, name: e.target.value})}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                <Form.Item>
                        <Input 
                            prefix={<UserOutlined />}
                            placeholder="Lastname"
                            value={userData.lastname}
                            onChange={e => setUserData({...userData, lastname: e.target.value})}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input 
                            prefix={<MailOutlined />}
                            type="email"
                            placeholder="Email"
                            value={userData.email}
                            onChange={e => setUserData({...userData, email: e.target.value})}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Select placeholder="Select user role" onChange={e => setUserData({...userData, role: e})} value={userData.role}>
                            <Option value="admin">Admin</Option>
                            <Option value="User">User</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input 
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Password"
                            value={userData.password}
                            onChange={e => setUserData({...userData, password: e.target.value})}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input 
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Repeat password"
                            value={userData.repeatPassword}
                            onChange={e => setUserData({...userData, repeatPassword: e.target.value})}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">Create user</Button>
            </Form.Item>

        </Form>
    )
}
 
export default CreateUserForm;