import React from 'react';
import './barchart.scss';

export default function Barchart({ width }) {
    if (width > 200) {
        width = 200;
    }
    const phantram = (width / 200) * 100;

    const style = {
        width: `${phantram}%`,
        height: '11px',
        borderRadius: '5px',
    };
    if (phantram <= 10) {
        style.backgroundColor = '#f34444';
    } else if (phantram <= 30) {
        style.backgroundColor = '#ff7f0f';
    } else if (phantram <= 40) {
        style.backgroundColor = '#ffdd57';
    } else if (phantram <= 60) {
        style.backgroundColor = '#a0e515';
    } else if (phantram <= 80) {
        style.backgroundColor = '#23cd5e';
    } else {
        style.backgroundColor = '#00c2b8';
    }

    const classes = `__barchart__`;
    return (
        <div className="__progress-line__">
            <div className={classes} style={style}></div>
        </div>
    );
}
