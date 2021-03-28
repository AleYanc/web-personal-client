import React, {useState, useCallback, useEffect} from 'react';
import {Avatar, Form, Input, Select, Button, Row, Col, notification} from 'antd';
import {UserOutlined, MailOutlined, LockOutlined} from '@ant-design/icons';
import {useDropzone} from 'react-dropzone';
import {getAvatarApi, uploadAvatarApi, updateUserApi} from '../../../../api/user';
import {getAccessTokenApi} from '../../../../api/auth';

import Noavatar from '../../../../assets/no-avatar.png';

import './EditUserForm.scss';

const EditUserForm = (props) => {
    const {user, setIsVisible, setReloadUsers} = props;
    const [avatar, setAvatar] = useState(null);
    const [userData, setUserData] = useState({});

    useEffect(() => {
       setUserData({
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        avatar: user.avatar
       })
    }, [user])

    useEffect(() => {
       if(user.avatar) {
           getAvatarApi(user.avatar)
           .then(response => {
               setAvatar(response);
           })
       } else {
           setAvatar(null);
       }
    }, [user])

    useEffect(() =>{
        if(avatar) {
            setUserData({...userData, avatar: avatar.file});
        }
    }, [avatar]);

    const updateUser = () => {
        const token = getAccessTokenApi();
        let userUpdate = userData;

        if(userUpdate.password || userUpdate.repeatPassword) {
            if(userUpdate.password !== userUpdate.repeatPassword) {
                notification['error']({message: "Passwords must be equal."});
                return;
            } else {
                delete userUpdate.repeatPassword;
            }
        }
        if(!userUpdate.name || !userUpdate.lastname || !userUpdate.email ) {
            notification['error']({message: "Name, last name and email are obligatory."});
            return;
        }
        if(typeof userUpdate.avatar == "object") {
            uploadAvatarApi(token, userUpdate.avatar, user._id)
            .then(response => {
                userUpdate.avatar = response.avatarName;
                updateUserApi(token, userUpdate, user._id).then(result => {
                    notification['success']({message: result.msg});
                    setIsVisible(false);
                    setReloadUsers(true);
                });
            });
        } else {
            updateUserApi(token, userUpdate, user._id).then(result => {
                notification['success']({message: result.msg});
                setIsVisible(false);
                setReloadUsers(true);
            });
        }
    }
 
    return ( 
        <div className="edit-user-form">
            <UploadAvatar avatar={avatar} setAvatar={setAvatar}/>
            <h4>Drag your avatar or click to select one</h4>
            <EditForm userData={userData} setUserData={setUserData} updateUser={updateUser}/>
        </div>
    );
}

function UploadAvatar(props) {
    const {avatar, setAvatar} = props;
    const [avatarUrl, setAvatarUrl] = useState(null);

    useEffect(() => {
        if(avatar) {
            if(avatar.preview) {
                setAvatarUrl(avatar.preview);
            } else {
                setAvatarUrl(avatar);
            }
        } else {
            setAvatarUrl(null);
        }
    }, [avatar])

    const onDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];
            setAvatar({file, preview: URL.createObjectURL(file)});
        },
        [setAvatar]
    );

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: 'image/jpeg, image/png',
        noKeyboard: true,
        onDrop
    });

    return (
        <div className="upload-avatar" {...getRootProps()}>
            <input {...getInputProps()}/>
            {isDragActive ? (
                <Avatar size={150} src={Noavatar}/>
            ) : <Avatar size={150} src={avatarUrl ? avatarUrl : Noavatar}/>}
        </div>
    )
}

function EditForm(props) {
    const {userData, setUserData, updateUser} = props;
    const {Option} = Select;

    return (
        <Form className="form-edit" onFinish={updateUser}>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input prefix={<UserOutlined />} placeholder="Name" value={userData.name} onChange={e => setUserData({...userData, name: e.target.value})}/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input prefix={<UserOutlined />} placeholder="Last name" value={userData.lastname} onChange={e => setUserData({...userData, lastname: e.target.value})}/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input prefix={<MailOutlined />} type="email" placeholder="Email" value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})}/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Select placeholder="Select user role" onChange={e => setUserData({...userData, role: e})} value={userData.role}>
                            <Option value="admin">Administrator</Option>
                            <Option value="User">User</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input prefix={<LockOutlined />} type="password" placeholder="Password" onChange={e => setUserData({...userData, password: e.target.value})}/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input prefix={<LockOutlined />} type="password" placeholder="Repeat Password" onChange={e => setUserData({...userData, repeatPassword: e.target.value})}/>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Update user
                </Button>
            </Form.Item>
        </Form>
    )
}
 
export default EditUserForm;