import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loadURLBalls, loadBalls } from '../../redux/action/action_Items';

import './pokeItem.scss';

const PokeItem = () => {
    let dispatch = useDispatch();

    const [Items, setItems] = useState([]);

    const { ListUrlBalls, listItems } = useSelector(
        state => state.ItemsReducer,
    );
    console.log(
        '🚀 ~ file: Poke-Item.js ~ line 13 ~ PokeItem ~ listItems',
        listItems,
    );
    useEffect(() => {
        dispatch(loadURLBalls());
    }, []);

    useEffect(() => {
        try {
            dispatch(loadBalls(ListUrlBalls.results));
        } catch (e) {}
    }, [ListUrlBalls]);

    useEffect(() => {
        const timer = setTimeout(() => {
            try {
                setItems(listItems.sort((a, b) => (a.id > b.id ? 1 : -1)));
            } catch (error) {}
        }, 2000);
        return () => clearTimeout(timer);
    }, [listItems]);

    return (
        <div className="PokeItem">
            <ul style={{ flexDirection: 'column' }}>
                {Items?.map(item => {
                    return (
                        <li key={item.id}>
                            {item.id}
                            <img
                                src={
                                    item?.sprites.default ||
                                    'https://www.kocel.com.tr/img/notfound.png'
                                }
                                alt={item.name}
                            />
                            <span>{item.name}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PokeItem;
