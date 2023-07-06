import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

function DefaulLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaulLayout;
