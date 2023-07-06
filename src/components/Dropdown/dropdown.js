import React, { useState, useEffect } from 'react';
import './dropdown.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const Dropdown = ({ varieties, urlFrom, name }) => {
    const [click, setClick] = useState(true);
    const handleDropdownClick = url => {
        urlFrom(url);
        setClick(true);
    };
    return (
        <div className="dropdown">
            <div
                className="dropdown__select"
                onClick={() => {
                    setClick(!click);
                }}
            >
                <span className="select">{name}</span>
                {click ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </div>
            {!click && (
                <div className="dropdown__list">
                    {varieties?.map(item => {
                        return (
                            <div
                                key={item.pokemon.name}
                                className="dropdown__list__item"
                                onClick={() => {
                                    handleDropdownClick(
                                        item.pokemon.url.split('/'),
                                    );
                                }}
                            >
                                {item.pokemon.name}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
