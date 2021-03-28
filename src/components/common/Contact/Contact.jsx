import React, {useState} from 'react';
import {Form, Input, Button, notification, Divider} from 'antd';
import emailjs from 'emailjs-com';

import './Contact.scss';


const ContactCommon = () => {
    const {TextArea} = Input;

    const frmContact = { userName:'', userEmail:'', subject:'', emailDetails:'' };
    const [contact,setContact] = useState(frmContact);

    const handleChange = e => { 
            const {name,value} = e.target;
            setContact({...contact,[name]:value});
    };

    const handleSubmit = e =>{
            emailjs.send('default_service','template_wu6daym', contact, 'user_OgtEWcWoFF0JcebLtM3bF')
            .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setContact(frmContact);
                    notification['success']({message: 'Email sent'});
            }, (err) => {
                    notification['error']({message: 'Error sending email'});
                    console.log('FAILED...', err);
            });
    }

    return (
        <div className="container-form">
            <h1>Contact me</h1>
            <Divider />
            <Form className="contact-form" onFinish={handleSubmit}>
                <Form.Item>
                    <Input className="form-input" value={contact.userName} name="userName" onChange={handleChange} placeholder="Your name"/>
                </Form.Item>

                <Form.Item>
                    <Input className="form-input" value={contact.userEmail} name="userEmail" onChange={handleChange} placeholder="Your email"/>
                </Form.Item>

                <Form.Item>
                    <Input className="form-input" value={contact.subject} name="subject" onChange={handleChange} placeholder="Subject"/>
                </Form.Item>

                <Form.Item>
                    <TextArea className="form-textarea" required name="emailDetails" onChange={handleChange} placeholder="Your message" value={contact.emailDetails}></TextArea>
                </Form.Item>

                <Form.Item>
                    <Button className="form-btn"htmlType="submit" type="primary">Send</Button>
                </Form.Item>

            </Form>

            <h3>I'll answer as fast as possible</h3>

        </div>
    );
}
 
export default ContactCommon;