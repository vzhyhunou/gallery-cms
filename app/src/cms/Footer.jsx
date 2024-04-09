import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslate} from 'react-admin';

import img from './img/3576175.png';

export default () => {

    const translate = useTranslate();

    return <footer className="u-align-center-sm u-align-center-xs u-black u-clearfix u-container-align-center u-footer">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <Link to="/" className="u-image u-logo u-image-1">
                <img src={img} className="u-logo-image u-logo-image-1" alt=""/>
            </Link>
            <div className="u-clearfix u-expanded-width u-gutter-30 u-layout-custom-sm u-layout-custom-xs u-layout-wrap u-layout-wrap-1">
                <div className="u-gutter-0 u-layout">
                    <div className="u-layout-row">
                        <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-15-lg u-size-15-md u-size-15-xl u-size-30-sm u-size-30-xs u-layout-cell-1">
                            <div className="u-container-layout u-valign-top u-container-layout-1">
                                <h6 className="u-text u-text-1">{translate('corporate.footer.title')}</h6>
                                <p className="u-small-text u-text u-text-variant u-text-2">{translate('corporate.footer.description')}</p>
                            </div>
                        </div>
                        <div className="u-align-left u-container-style u-layout-cell u-size-15-lg u-size-15-md u-size-15-xl u-size-30-sm u-size-30-xs u-layout-cell-2">
                            <div className="u-container-layout u-valign-top u-container-layout-2">
                                <h6 className="u-text u-text-3">{translate('corporate.footer.title')}</h6>
                                <p className="u-small-text u-text u-text-variant u-text-4">{translate('corporate.footer.description')}</p>
                            </div>
                        </div>
                        <div className="u-align-left u-container-style u-layout-cell u-size-15-lg u-size-15-md u-size-15-xl u-size-30-sm u-size-30-xs u-layout-cell-3">
                            <div className="u-container-layout u-valign-top u-container-layout-3">
                                <h6 className="u-text u-text-5">{translate('corporate.footer.title')}</h6>
                                <p className="u-small-text u-text u-text-variant u-text-6">{translate('corporate.footer.description')}</p>
                            </div>
                        </div>
                        <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-15-lg u-size-15-md u-size-15-xl u-size-30-sm u-size-30-xs u-layout-cell-4">
                            <div className="u-container-layout u-valign-top u-container-layout-4">
                                <h6 className="u-text u-text-7">{translate('corporate.footer.title')}</h6>
                                <p className="u-small-text u-text u-text-variant u-text-8">{translate('corporate.footer.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="u-social-icons u-spacing-10 u-social-icons-1">
                <a className="u-social-url" title="facebook" href="https://facebook.com/name">
                    <span className="u-icon u-social-facebook u-social-icon u-text-palette-5-base u-icon-1">
                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112">
                            <use xlinkHref="#svg-b066"/>
                        </svg>
                        <svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-b066">
                            <path fill="currentColor" d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z"/>
                        </svg>
                    </span>
                </a>
                <a className="u-social-url" title="twitter" href="https://twitter.com/name">
                    <span className="u-icon u-social-icon u-social-twitter u-text-palette-5-base u-icon-2">
                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112">
                            <use xlinkHref="#svg-202e"/>
                        </svg>
                        <svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-202e">
                            <path fill="currentColor" d="M92.2,38.2c0,0.8,0,1.6,0,2.3c0,24.3-18.6,52.4-52.6,52.4c-10.6,0.1-20.2-2.9-28.5-8.2c1.4,0.2,2.9,0.2,4.4,0.2c8.7,0,16.7-2.9,23-7.9c-8.1-0.2-14.9-5.5-17.3-12.8c1.1,0.2,2.4,0.2,3.4,0.2c1.6,0,3.3-0.2,4.8-0.7c-8.4-1.6-14.9-9.2-14.9-18c0-0.2,0-0.2,0-0.2c2.5,1.4,5.4,2.2,8.4,2.3c-5-3.3-8.3-8.9-8.3-15.4c0-3.4,1-6.5,2.5-9.2c9.1,11.1,22.7,18.5,38,19.2c-0.2-1.4-0.4-2.8-0.4-4.3c0.1-10,8.3-18.2,18.5-18.2c5.4,0,10.1,2.2,13.5,5.7c4.3-0.8,8.1-2.3,11.7-4.5c-1.4,4.3-4.3,7.9-8.1,10.1c3.7-0.4,7.3-1.4,10.6-2.9C98.9,32.3,95.7,35.5,92.2,38.2z"/>
                        </svg>
                    </span>
                </a>
                <a className="u-social-url" title="instagram" href="https://instagram.com/name">
                    <span className="u-icon u-social-icon u-social-instagram u-text-palette-5-base u-icon-3">
                        <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112">
                            <use xlinkHref="#svg-aef9"/>
                        </svg>
                        <svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-aef9">
                            <path fill="currentColor" d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9zM55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z"/>
                            <path fill="#FFFFFF" d="M79.7,26.8c-3,0-5.4,2.5-5.4,5.4s2.5,5.4,5.4,5.4c3,0,5.4-2.5,5.4-5.4S82.7,26.8,79.7,26.8z"/>
                            <path fill="currentColor" d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z"/>
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    </footer>;
};
