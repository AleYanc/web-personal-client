import React, {useState} from 'react';
import {Form, Input, Button, Checkbox, notification} from 'antd';
import {signUpApi} from '../../../api/user';

// utils //
import {emailValidation, minLengthValidation} from '../../../utils/formValidation';

import {MailOutlined, LockOutlined} from '@ant-design/icons';

import './RegisterForm.scss';

const RegisterForm = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        repeatPassword: '',
        privacyPolicy: false
    });

    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false
    })

    const changeForm = e => {
        if(e.target.name === "privacyPolicy"){
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked
            })
        } else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            })
        }
    }

    const inputValidation = e => {
        const {type, name} = e.target;
        if(type === 'email') {
            setFormValid({ ...formValid, [name]: emailValidation(e.target) });
        }
        if(type === 'password') {
            setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
        }
        if(type === 'checkbox') {
            setFormValid({ ...formValid, [name]: e.target.checked });
        }
    }

    const register = async () => {
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const repeatPasswordVal = inputs.repeatPassword;

        if(!emailVal || !passwordVal || !repeatPasswordVal || !inputs.privacyPolicy) {
            notification['error']({
                message: 'All inputs are obligatory'
            })
        } else {
            if(passwordVal != repeatPasswordVal) {
                notification['error']({
                    message: 'Passwords must be equal'
                });
            } else {
                const result = await signUpApi(inputs);
                if(!result.ok) {
                    notification['error']({
                        message: result.msg
                    })
                } else {
                    notification['success']({
                        message: result.msg
                    })
                    resetForm();
                }
            }
        }
    }

    const resetForm = () => {
        const inputs = document.getElementsByTagName('input');
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove('success');
            inputs[i].classList.remove('error');
        }
        setInputs({
            email: '',
            password: '',
            repeatPassword: '',
            privacyPolicy: false
        });
        setFormValid({
            email: false,
            password: false,
            repeatPassword: false,
            privacyPolicy: false
        })
    }

    return ( 
        <Form className="register-form" onFinish={register} onChange={changeForm}>

            <Form.Item>
                <Input prefix={<MailOutlined style={{color: "rgba(0, 0, 0, .25)"}}/>} type="email" name="email" 
                placeholder="E-Mail" className="register-form__input" value={inputs.email} onChange={inputValidation}/>
            </Form.Item>

            <Form.Item>
                <Input prefix={<LockOutlined  style={{color: "rgba(0, 0, 0, .25)"}}/>} type="password" name="password" 
                placeholder="Password" className="register-form__input" value={inputs.password} onChange={inputValidation}/>
            </Form.Item>

            <Form.Item>
                <Input prefix={<LockOutlined  style={{color: "rgba(0, 0, 0, .25)"}}/>} type="password" name="repeatPassword" 
                placeholder="Repeat password" className="register-form__input" value={inputs.repeatPassword} onChange={inputValidation}/>
            </Form.Item>

            <Form.Item>
                <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy} onChange={inputValidation}>I've read & accept privacy policies</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" className="register-form_button">Create user</Button>
            </Form.Item>

        </Form>
    );  
}
 
export default RegisterForm;