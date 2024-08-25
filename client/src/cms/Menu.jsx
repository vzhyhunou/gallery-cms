import React, {useRef, useEffect} from 'react';
import {useLocale, useSetLocale, useTranslate, usePermissions, useLocales, useRefresh, useLogout} from 'react-admin';
import {Link, useParams} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import clsx from 'clsx';
import GlobalStyles from '@mui/material/GlobalStyles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useContextProvider} from '@vzhyhunou/vzh-cms';

export default () => {

    const refresh = useRefresh();
    const {id} = useParams();
    const {tags: {users: {
        PAGES_EDITOR,
        CATALOGS_EDITOR,
        MANAGER
    }}} = useContextProvider();
    const translate = useTranslate();
    const locale = useLocale();
    const locales = useLocales();
    const setLocale = useSetLocale();
    const {permissions} = usePermissions();
    const logout = useLogout();
    const refNav = useRef();
    const refMenu = useRef();
    const refOver = useRef();
    const m991 = useMediaQuery('(max-width: 991px)');

    useEffect(() => {
        refresh();
    }, [refresh]);

    const open = () => {
        //document.body.classList.add('menu-overlay', 'u-offcanvas-opened');
        refNav.current.classList.add('open');
        refMenu.current.style.setProperty('width', '100%');
        setTimeout(() => refOver.current.style.removeProperty('opacity'));
    };

    const close = () => {
        //document.body.classList.remove('menu-overlay', 'u-offcanvas-opened');
        refNav.current.classList.remove('open');
        refOver.current.style.setProperty('opacity', 0);
        setTimeout(() => refMenu.current.style.removeProperty('width'), 500);
    };

    const adminPath = (() => {

        if (!permissions) {
            return null;
        }

        if (permissions.includes(PAGES_EDITOR)) {
            return `/pages/${id}`;
        }

        if (permissions.includes(CATALOGS_EDITOR)) {
            return `/catalogs/${id}`;
        }

        if (permissions.includes(MANAGER)) {
            return "/users";
        }

        return null;
    })();

    return <nav ref={refNav} className={clsx('u-menu', 'u-menu-dropdown', 'u-offcanvas', 'u-menu-1', {'u-enable-responsive': m991})}>
        <div className="menu-collapse" style={{fontSize: '1rem', letterSpacing: 0, fontWeight: 700}}>
            <button
                onClick={open}
                className="u-button-style u-custom-active-border-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base u-text-palette-5-base"
            >
                <svg className="u-svg-link" viewBox="0 0 24 24">
                    <use xlinkHref="#menu-hamburger"/>
                </svg>
                <svg className="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px">
                    <g>
                        <rect y="1" width="16" height="2"/>
                        <rect y="7" width="16" height="2"/>
                        <rect y="13" width="16" height="2"/>
                    </g>
                </svg>
            </button>
        </div>
        <div className="u-custom-menu u-nav-container">
            <ul className="u-nav u-spacing-20 u-unstyled u-nav-1">
                <li className="u-nav-item">
                    <HashLink
                        smooth
                        className="u-border-active-palette-3-base u-border-hover-grey-50 u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-5-base u-text-grey-90 u-text-hover-palette-5-base"
                        to="#catalogs"
                        style={{padding: 10}}
                    >{translate('corporate.menu.catalogs')}</HashLink>
                </li>
                <li className="u-nav-item">
                    <HashLink
                        smooth
                        className="u-border-active-palette-3-base u-border-hover-grey-50 u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-5-base u-text-grey-90 u-text-hover-palette-5-base"
                        to="#contact"
                        style={{padding: 10}}
                    >{translate('corporate.menu.contact')}</HashLink>
                </li>
                {adminPath &&
                    <li className="u-nav-item">
                        <Link
                            className="u-border-active-palette-3-base u-border-hover-grey-50 u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-5-base u-text-grey-90 u-text-hover-palette-5-base"
                            style={{padding: 10}}
                            to={adminPath}
                        >{translate('corporate.menu.admin')}</Link>
                    </li>
                }
                {locales.map(l => l.locale).filter(l => locale !== l).map(l =>
                    <li key={l} className="u-nav-item">
                        <Link
                            className="u-border-active-palette-3-base u-border-hover-grey-50 u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-5-base u-text-grey-90 u-text-hover-palette-5-base"
                            onClick={() => setLocale(l)}
                            style={{padding: 10}}
                        >{l.toUpperCase()}</Link>
                    </li>
                )}
                <li className="u-nav-item">
                    <Link
                        className="u-border-active-palette-3-base u-border-hover-grey-50 u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-5-base u-text-grey-90 u-text-hover-palette-5-base"
                        style={{padding: 10}}
                        {...(permissions ? {onClick: () => logout('/')} : {to: '/login'})}
                    >{translate(permissions ? 'corporate.menu.logout' : 'corporate.menu.login')}</Link>
                </li>
            </ul>
        </div>
        <div ref={refMenu} className="u-custom-menu u-nav-container-collapse">
            <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                <div className="u-inner-container-layout u-sidenav-overflow">
                    <div className="u-menu-close" onClick={close}/>
                    <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                        <li className="u-nav-item">
                            <HashLink
                                className="u-button-style u-nav-link"
                                to="#catalogs"
                                onClick={close}
                            >{translate('corporate.menu.catalogs')}</HashLink>
                        </li>
                        <li className="u-nav-item">
                            <HashLink
                                className="u-button-style u-nav-link"
                                to="#contact"
                                onClick={close}
                            >{translate('corporate.menu.contact')}</HashLink>
                        </li>
                        {locales.map(l => l.locale).filter(l => locale !== l).map(l =>
                            <li key={l} className="u-nav-item">
                                <Link
                                    className="u-button-style u-nav-link"
                                    onClick={() => setLocale(l)}
                                >{l.toUpperCase()}</Link>
                            </li>
                        )}
                        <li className="u-nav-item">
                            <Link
                                className="u-button-style u-nav-link"
                                {...(permissions ? {onClick: () => logout('/')} : {to: '/login'})}
                            >{translate(permissions ? 'corporate.menu.logout' : 'corporate.menu.login')}</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                ref={refOver}
                onClick={close}
                className="u-black u-menu-overlay u-opacity u-opacity-70"
                style={{transition: 'opacity 500ms', opacity: 0}}
            />
        </div>
        <GlobalStyles styles={{
            '.u-offcanvas .u-sidenav': {
                flexBasis: '250px !important'
            },
            '.u-offcanvas:not(.u-menu-open-right) .u-sidenav': {
                marginLeft: -250
            }
        }}/>
    </nav>;
};
