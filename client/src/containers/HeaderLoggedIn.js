import React from 'react';

import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const HeaderLoggedIn = ({ children, hamburgerToggle, hamburgerOpen }) => {
    return (
        <section>
            <header className="headerLogin">
                    <button
                        onClick={hamburgerToggle}
                        onKeyPress={hamburgerToggle}
                        aria-haspopup="true"
                        aria-expanded={"false"} 
                        id="hamburger-menu" >
                    <i className="main-button-icon fa fa-bars fa-3x"></i>
                    </button>

                    <nav id="sidebar" className={hamburgerOpen ? "open" : null }>
                            <h3>User Settings</h3>
                            <h3>About</h3>
                            <h3>Resources</h3>
                                <p><a href="https://blog.bitsrc.io/react-oauth-authentication-with-firebase-dfe0e8c5d0d4" target="_blank" rel="noopener noreferrer">Esau Silva</a></p>
                    </nav>
               
                <h1>Habit Tracker</h1>

                {children}
            </header> 
        </section>
    );
};

HeaderLoggedIn.propTypes = propTypes;

export default HeaderLoggedIn;