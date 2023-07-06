import React from 'react';
import { useState, useEffect } from 'react';

import axiosClient from '../../api/axiosClient';
import pokeApi from '../../api/pokeApi';
import Item from '../Item';
import Pagination from '../Pagination/Pagination';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../loading/Loading';

import './Pokemon_list.scss';

const PokemonList = () => {
    const [Items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const [Count, setCount] = useState(1010);

    const [number, setNumber] = useState(0);

    const [page, setPage] = useState(1);

    const { pageNumber } = useParams();
    const getList = async () => {
        setItems([]);

        const response = await pokeApi.getLists(number);
        getPokemonList(response.data.results);
    };

    const getPokemonList = async res => {
        // setLoading(false);
        res?.forEach(async element => {
            const response = await pokeApi.getPokemonList(element.name);

            setItems(state => {
                state = [...state, response.data];
                return state.sort((a, b) => (a.id > b.id ? 1 : -1));
            });
        });
    };
    if (number === 1000) {
        Items.splice(10, 19);
    }
    useEffect(() => {
        setLoading(false);
        const timer = setTimeout(() => {
            getList();
        }, 1000);

        const valueNumber = (Number(pageNumber) - 1) * 20;
        setNumber(valueNumber);
        setPage(Number(pageNumber));
        setLoading(true);

        return () => clearTimeout(timer);
        // setItems([]);
    }, [pageNumber, number]);

    // useEffect(() => {
    //     getList();
    // }, []);

    return (
        <div className="pokemon__List container">
            {loading && Items !== [] ? (
                <>
                    <div className="pokemon__List-item">
                        {Items.map((item, i) => {
                            return (
                                <Item
                                    key={i}
                                    id={item.id}
                                    img={
                                        item.sprites.other.home.front_default ||
                                        item.sprites.other.dream_world
                                            .front_default ||
                                        item.sprites.front_default ||
                                        'https://www.kocel.com.tr/img/notfound.png'
                                    }
                                    name={item.name}
                                    types={item.types}
                                />
                            );
                        })}
                    </div>
                </>
            ) : (
                <Loading />
            )}
            <Pagination postsPerPage={20} totalPosts={Count} paginate={page} />
        </div>
    );
};

export default PokemonList;
