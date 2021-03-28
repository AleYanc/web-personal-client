import React from 'react';
import ContactCommon from '../components/common/Contact';
import {Helmet} from 'react-helmet';

const Contact = () => {
    return ( 
        <>
        <Helmet>
            <title>Alejo Yanczuk - Contact</title>
            <meta name="description" content="Contact page | Web developer website" data-react-helmet="true"/>
        </Helmet>
        <ContactCommon />
        </>
    );
}
 
export default Contact;