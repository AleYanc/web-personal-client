import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import {Helmet} from 'react-helmet';

// Components //
import MainBanner from '../components/common/MainBanner';
import HomeProjects from '../components/common/HomeProjects';
import AboutMe from '../components/common/AboutMe';

const Home = () => {
    return ( 
        <>
        <Helmet>
            <title>Alejo Yanczuk - Home</title>
            <meta name="description" content="Home page | Web developer website" data-react-helmet="true"/>
        </Helmet>
        <div>
            <MainBanner />
            <HomeProjects />
            <AboutMe />

            <div>
            <ScrollToTop smooth />
            </div>
        </div>
        </>
    );
}
 
export default Home;