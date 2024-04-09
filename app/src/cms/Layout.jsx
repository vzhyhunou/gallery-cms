import React, {useEffect} from 'react';
import {useTranslate} from 'react-admin';
import {Helmet} from 'react-helmet';
import {GlobalStyles, useMediaQuery} from '@mui/material';
import {Outlet} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import styles from './styles';
import s0 from './css/nicepage.css?inline';
import s1 from './css/nicepage-site.css?inline';
import s2 from './css/style.css?inline';
import './css/theme-font.css';
import './css/page-font.css';

const mediaMax = {'575': 'XS', '767': 'SM', '991': 'MD', '1199': 'LG'};

export default () => {

    const translate = useTranslate();
    const mediaValue = [...Object.keys(mediaMax).filter(n => useMediaQuery(`(max-width: ${n}px)`)).map(n => mediaMax[n]), 'XL'][0];

    useEffect(() => {
        document.body.classList.add('u-body', 'u-xl-mode');
        document.documentElement.classList.add(`u-responsive-${mediaValue.toLowerCase()}`);
        return () => {
            document.documentElement.classList.remove(`u-responsive-${mediaValue.toLowerCase()}`);
            document.body.classList.remove('u-body', 'u-xl-mode');
        }
    }, [mediaValue]);

    return <>
        <GlobalStyles {...{styles}}/>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="keywords" content={translate('corporate.keywords')} />
            <meta name="description" content={translate('corporate.description')} />
            {[s0, s1, s2].map((s, i) => <style key={i}>{s}</style>)}
        </Helmet>
        <Header/>
        <Outlet/>
        <Footer/>
    </>;
};
