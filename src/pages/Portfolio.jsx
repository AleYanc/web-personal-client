import React from 'react';
import {Helmet} from 'react-helmet';

import PortfolioCommon from '../components/common/PortfolioCommon';

const Portfolio = () => {
    return ( 
        <>
        <Helmet>
            <title>Alejo Yanczuk - Portfolio</title>
            <meta name="description" content="Portfolio - Projects page | Web developer website" data-react-helmet="true"/>
        </Helmet>
        <PortfolioCommon />
        </>
    );
}
 
export default Portfolio;