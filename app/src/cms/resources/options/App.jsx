import React from 'react';
import {useTranslate} from 'react-admin';
import {useExchange, useContextProvider} from '@vzhyhunou/vzh-cms';
import {HashLink} from 'react-router-hash-link';
import {useMediaQuery} from '@mui/material';
import {stringify} from 'query-string';

const mediaMax = {'575': 264, '767': 413, '991': 254, '1199': 155};

export default ({toCatalog, ...props}) => {

    const translate = useTranslate();
    const {funcProvider: {originByData}} = useContextProvider();
    const {data} = useExchange({path: 'catalogs/search/menu'});
    const mediaValue = [...Object.keys(mediaMax).filter(n => useMediaQuery(`(max-width: ${n}px)`)).map(n => mediaMax[n]), 209][0];

    if (!data) {
        return null;
    }

    return <section {...props} className="u-align-center u-clearfix u-container-align-center u-grey-90 u-section-3">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <h2 className="u-align-center u-text u-text-1">{translate('corporate.options.title')}</h2>
            <div className="u-expanded-width u-list u-list-1">
                <div className="u-repeater u-repeater-1">
                    {data.map(({id, name, desc, image, ...rest}, i) =>
                        <div key={i} className="u-align-left u-container-align-center u-container-style u-list-item u-repeater-item u-white">
                            <div className="u-container-layout u-similar-container u-valign-top" style={{
                                padding: '20px 20px 30px'
                            }}>
                                <div className="u-image u-image-circle" style={{
                                    height: mediaValue,
                                    width: mediaValue,
                                    backgroundImage: `url(${originByData('catalogs', {id, ...rest})}/${image})`,
                                    backgroundPosition: '50% 50%',
                                    margin: '0 auto'
                                }}/>
                                <h4 className="u-align-center u-custom-font u-font-montserrat u-text u-text-default" style={{
                                    textTransform: 'uppercase',
                                    fontSize: '1.125rem',
                                    letterSpacing: 2,
                                    fontWeight: 700,
                                    margin: '20px auto 0'
                                }}>{name}</h4>
                                <p className="u-align-center u-text" style={{
                                    fontStyle: 'italic',
                                    margin: '20px 0 0'
                                }}>{desc}</p>
                                <HashLink smooth to={`?${stringify({id})}#${toCatalog}`}
                                    className="u-active-none u-align-center u-border-1 u-border-active-palette-4-dark-1 u-border-black u-border-hover-palette-4-dark-1 u-btn u-button-style u-hover-none u-none u-text-body-color"
                                    style={{
                                        borderStyle: 'none none double',
                                        margin: '20px auto 0',
                                        padding: 0
                                    }}
                                >{translate('corporate.options.more')}</HashLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <p className="u-align-center u-text u-text-18">
                {translate('corporate.options.imagesFrom')} <a
                    href="https://www.freepik.com"
                    className="u-active-none u-border-1 u-border-active-white u-border-hover-white u-border-no-left u-border-no-right u-border-no-top u-border-palette-2-base u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-btn-15"
                    target="_blank"
                    rel="noreferrer"
                >Freepik</a>
            </p>
        </div>
    </section>;
};
