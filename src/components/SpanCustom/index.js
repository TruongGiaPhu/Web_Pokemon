import React from 'react';
import './spanCustom.scss';

function SpanCustom({ children, color, ...passProps }) {
    const props = {
        ...passProps,
    };
    const classes = `__span__ ${color ? color : ''} `;
    return (
        <span className={classes} {...props}>
            {children}
        </span>
    );
}

export default SpanCustom;
