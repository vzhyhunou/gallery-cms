import React from 'react';
import {useTranslate} from 'react-admin';
import {useExchange, useContextProvider} from '@vzhyhunou/vzh-cms';
import {useLocation} from 'react-router-dom';
import {parse} from 'query-string';
import useMediaQuery from '@mui/material/useMediaQuery';

const mediaMax = {'767': 247, '991': 254, '1199': 196};
const layoutMax = {'575': {paddingLeft: 40, paddingRight: 40}, '767': {paddingLeft: 20, paddingRight: 20}, '991': {paddingBottom: 30}};

export default ({defaultId, ...props}) => {

    const translate = useTranslate();
    const {search} = useLocation();
    const {funcProvider: {originByData}} = useContextProvider();
    const {id} = parse(search, {parseNumbers: true});
    const {data} = useExchange({path: `catalogs/search/one/${id === undefined ? defaultId : id}`});
    const mediaValue = [...Object.keys(mediaMax).filter(n => useMediaQuery(`(max-width: ${n}px)`)).map(n => mediaMax[n]), 276][0];
    const layoutValue = [...Object.keys(layoutMax).filter(n => useMediaQuery(`(max-width: ${n}px)`)).map(n => layoutMax[n]), {padding: '30px 30px 50px'}][0];
    const m1199 = useMediaQuery(`(max-width: 1199px)`);

    if (!data) {
        return null;
    }

    const {name, desc, products} = data;

    document.title = translate('corporate.catalog.title', {name});

    return <section {...props} className="u-align-center u-clearfix u-white u-section-2">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <h2 className="u-align-center u-text u-text-1">{name}</h2>
            <p className="u-align-center u-text u-text-grey-70 u-text-2">{desc}</p>
            <div className="u-expanded-width u-list u-list-1">
                <div className="u-repeater u-repeater-1">
                    {products.map(({name, desc, image, price, ...rest}, i) =>
                        <div key={i} className="u-align-center u-container-align-center u-container-style u-list-item u-repeater-item u-shape-rectangle">
                            <div className="u-container-layout u-similar-container u-valign-top" style={layoutValue}>
                                <div className="u-align-center u-image u-image-circle" style={{
                                    height: mediaValue,
                                    width: mediaValue,
                                    backgroundImage: `url(${originByData('products', rest, image)})`,
                                    backgroundPosition: '50% 50%',
                                    margin: '0 auto'
                                }}/>
                                <h4 className="u-align-center u-text" style={{
                                    fontSize: '1.25rem',
                                    fontStyle: 'normal',
                                    textTransform: 'uppercase',
                                    letterSpacing: 2,
                                    margin: '30px 0 0',
                                    width: m1199 && 'auto'
                                }}>{name}</h4>
                                <p className="u-align-center u-text" style={{
                                    fontStyle: 'italic',
                                    fontSize: '1rem',
                                    margin: '22px 0 0',
                                    width: m1199 && 'auto'
                                }}>{desc}</p>
                                <h5 className="u-align-center u-custom-font u-text u-text-font u-text-palette-5-base" style={{
                                    fontSize: '1.875rem',
                                    fontWeight: 700,
                                    letterSpacing: 1,
                                    margin: '20px 0 0',
                                    width: m1199 && 'auto'
                                }}>${price}</h5>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <p className="u-align-center u-text u-text-default u-text-21">
                {translate('corporate.catalog.imagesFrom')} <a
                    href="https://www.freepik.com"
                    className="u-active-none u-border-1 u-border-active-palette-3-base u-border-black u-border-hover-palette-3-base u-border-no-left u-border-no-right u-border-no-top u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-button-link u-button-style u-hover-none u-none u-radius-0 u-text-body-color u-top-left-radius-0 u-top-right-radius-0 u-btn-1"
                    target="_blank"
                    rel="noreferrer"
                >Freepik</a>
            </p>
        </div>
    </section>;
};
