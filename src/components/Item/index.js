import React from 'react';
import './item.scss';
import { Link } from 'react-router-dom';
import SpanCustom from '../SpanCustom';

const Item = ({ id, img, name, types }) => {
    const Style = `Item__img ${types[0].type.name}`;
    return (
        <div className="Item">
            <Link to={`/pokemon/${id}/${name}`}>
                <figure>
                    <img src={img} alt={name} className={Style} />
                </figure>
                <div className="Item__info">
                    <p>
                        <span>#</span> {id}
                    </p>
                    <h3>{name}</h3>
                    <div className="Item__info__abilities">
                        {types.map(item => {
                            return (
                                <SpanCustom
                                    key={item.slot}
                                    color={item.type.name}
                                >
                                    {item.type.name}
                                </SpanCustom>
                            );
                        })}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Item;
