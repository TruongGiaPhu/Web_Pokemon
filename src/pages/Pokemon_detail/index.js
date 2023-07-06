import React, { useState, useEffect } from 'react';
import SpanCustom from '../../components/SpanCustom';
import './Poke_detail.scss';
import { Link } from 'react-router-dom';
import Barchart from '../../components/Barchart';
import { useParams } from 'react-router-dom';

import Dropdown from '../../components/Dropdown/dropdown';
import Loading from '../../components/loading/Loading';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PokeEvolutions from './poke_evolutions';
import pokeApi from '../../api/pokeApi';
import ModalPopup from '../../components/ModalPopup/Modal_Popup';

function Pokemon_detail() {
    const { id, name } = useParams();

    const [pokedata, setPokeData] = useState();
    const [evolution, setEvolution] = useState();
    const [prev, setPrev] = useState();
    const [next, setNext] = useState();

    console.log(
        '🚀 ~ file: index.js:31 ~ Pokemon_detail ~ pokedata:',
        pokedata,
    );

    const [specie, setSpecie] = useState();

    const [loading, setLoading] = useState(true);
    const [click, setClick] = useState(false);

    // get pokemon
    const GetPokemon = async idPoke => {
        const res = await pokeApi.getPokemon(idPoke);
        return res.data;
    };

    const loadPokemon = async () => {
        setLoading(true);
        const res = await GetPokemon(Number(id));
        setPokeData(res);
    };

    const loadPrev = async () => {
        var number = 0;
        if (Number(id) - 1 <= 0) {
            number = 1010;
        } else {
            number = Number(id) - 1;
        }
        const res = await GetPokemon(number);
        setPrev(res);
    };

    const loadNext = async () => {
        var number = 0;
        if (Number(id) + 1 === 1011) {
            number = 1;
        } else {
            number = Number(id) + 1;
        }
        const res = await GetPokemon(number);
        setNext(res);
    };

    const loadSpecie = async () => {
        try {
            const res = await pokeApi.getSpecies(
                pokedata.species.url.split('/')[6],
            );
            setSpecie(res.data.varieties);
            console.log(
                '🚀 ~ file: index.js:95 ~ loadSpecie ~ res:',
                res.data.varieties,
            );
            const response = await pokeApi.getEvolution(
                res.data.evolution_chain.url.split('/')[6],
            );

            console.log(
                '🚀 ~ file: index.js:98 ~ loadSpecie ~ res:',
                response.data,
            );

            parseEvolution(response.data);
        } catch (error) {}
    };

    const loadVariants = async url => {
        const res = await pokeApi.getPokemon(url[6]);
        setPokeData(res.data);
    };

    const loadDing = async () => {
        try {
            await loadPokemon();
            await loadSpecie();
        } catch (err) {}
        setLoading(false);
    };

    if (evolution === undefined) {
        loadSpecie();
    }

    function parseEvolution(evolutionChain) {
        console.log(
            '🚀 ~ file: index.js:138 ~ parseEvolution ~ evolutionChain:',
            evolutionChain,
        );
        let evolutionArray = [[evolutionChain.chain.species.name]];

        let evolutionQueue = [evolutionChain.chain.evolves_to];

        // follow evolution chain (nested in JSON) until queue is "empty"
        while (
            evolutionQueue[0] !== undefined &&
            evolutionQueue[0].length !== 0
        ) {
            evolutionChain = evolutionQueue.shift();
            let subEvolutionArray = [];

            // iterates through all pokémon that evolves from current species
            for (let field in evolutionChain) {
                // number represents a key to evolved pokémon
                if (!isNaN(parseInt(field))) {
                    subEvolutionArray.push(evolutionChain[field].species.name);
                    evolutionQueue.push(evolutionChain[field].evolves_to);
                }
            }
            evolutionArray.push(subEvolutionArray);
        }
        setEvolution(evolutionArray);
    }

    const [abilitys, setAbilitys] = useState([]);
    console.log('🚀 ~ file: index.js ~ line 112 ~ useEffect ~ api', abilitys);

    const loadAbility = async url => {
        const res = await pokeApi.getAbility(url.split('/')[6]);

        // setAbilitys([...abilitys]);
        console.log('🚀 ~ file: index.js:140 ~ loadAbility ~ res:', res.data);
    };

    useEffect(() => {
        loadDing();
        loadPrev();
        loadNext();
    }, []);

    useEffect(() => {
        // loadPokemon();
        loadDing();
        loadPrev();
        loadNext();
    }, [id]);

    return (
        <div className="container">
            {!pokedata || loading || id === undefined ? (
                <Loading />
            ) : (
                <div className="pokemon__detail">
                    <div className="pokemon__detail__arrow">
                        <Link to={`/pokemon/${prev?.id}/${prev?.name}`}>
                            <div className="pokemon__detail__arrow__right">
                                <ArrowBackIosIcon fontSize="small" />
                                <span>#{prev?.id}</span>
                                <span>{prev?.name}</span>
                            </div>
                        </Link>
                        {/* <div onClick={() => loadPrevs()}>fsdf</div> */}
                        <h2 className="pokemon__detail__name">
                            {pokedata?.name} <span>#{id}</span>
                        </h2>
                        <Link to={`/pokemon/${next?.id}/${next?.name}`}>
                            <div className="pokemon__detail__arrow__left">
                                <span>{next?.name}</span>
                                <span>#{next?.id}</span>
                                <ArrowForwardIosIcon fontSize="small" />
                            </div>
                        </Link>
                    </div>

                    <div className="pokemon__detail__dropdown">
                        <Dropdown
                            varieties={specie}
                            urlFrom={loadVariants}
                            name={pokedata.name}
                        />
                    </div>
                    <div className="pokemon__detail__top">
                        <div className="pokemon__detail__top__left">
                            <figure>
                                <img
                                    src={
                                        pokedata?.sprites?.other?.home
                                            .front_default ||
                                        pokedata?.sprites?.other?.dream_world
                                            .front_default ||
                                        pokedata?.sprites.front_default ||
                                        'https://www.kocel.com.tr/img/notfound.png'
                                    }
                                    alt={pokedata?.name}
                                />
                            </figure>
                        </div>
                        <div className="pokemon__detail__top__right">
                            <div className="pokemon__detail__top__right__abilities">
                                <h2>Pokédex data</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>{pokedata.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Type</td>
                                            <td>
                                                {pokedata?.types &&
                                                    pokedata?.types.map(
                                                        (item, index) => {
                                                            return (
                                                                <SpanCustom
                                                                    key={index}
                                                                    color={
                                                                        item
                                                                            .type
                                                                            .name
                                                                    }
                                                                >
                                                                    {
                                                                        item
                                                                            .type
                                                                            .name
                                                                    }
                                                                </SpanCustom>
                                                            );
                                                        },
                                                    )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>height</td>
                                            <td>{pokedata.height / 10}.0m</td>
                                        </tr>
                                        <tr>
                                            <td>weight</td>
                                            <td>{pokedata.weight / 10}.0kg</td>
                                        </tr>
                                        <tr>
                                            <td>Abilities</td>
                                            <td>
                                                {pokedata.abilities?.map(
                                                    (item, index) => {
                                                        return (
                                                            <div
                                                                key={index}
                                                                onClick={() => {
                                                                    loadAbility(
                                                                        item
                                                                            .ability
                                                                            .url,
                                                                    );
                                                                }}
                                                            >
                                                                {index + 1}.
                                                                {
                                                                    item.ability
                                                                        .name
                                                                }
                                                                {item.is_hidden ===
                                                                true
                                                                    ? ' (hidden)'
                                                                    : ''}
                                                                <ModalPopup
                                                                    name={
                                                                        item
                                                                            .ability
                                                                            .name
                                                                    }
                                                                    url={
                                                                        item
                                                                            .ability
                                                                            .url
                                                                    }
                                                                    hide={click}
                                                                />
                                                            </div>
                                                        );
                                                    },
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="pokemon__detail__body__stats">
                        <h2>Stats</h2>
                        <table>
                            <tbody>
                                {pokedata?.stats !== undefined &&
                                    pokedata?.stats.map((items, index) => {
                                        return (
                                            <tr key={index}>
                                                <td
                                                    style={{
                                                        width: '100px',
                                                    }}
                                                >
                                                    {items.stat.name ===
                                                    'special-attack' ? (
                                                        <>Sp.Attack</>
                                                    ) : (
                                                          <>
                                                              {' '}
                                                              {items.stat.name}
                                                          </>
                                                      ) &&
                                                      items.stat.name ===
                                                          'special-defense' ? (
                                                        <>Sp.Defense</>
                                                    ) : (
                                                        <> {items.stat.name}</>
                                                    )}
                                                </td>
                                                <td
                                                    style={{
                                                        width: '30px',
                                                    }}
                                                >
                                                    {items.base_stat}
                                                </td>
                                                <td
                                                    style={{
                                                        width: '500px',
                                                    }}
                                                >
                                                    <div>
                                                        <Barchart
                                                            width={
                                                                items.base_stat
                                                            }
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Total</td>
                                    <td>
                                        {pokedata?.stats !== undefined &&
                                            pokedata.stats.reduce(
                                                (acc, cur) =>
                                                    acc + cur.base_stat,
                                                0,
                                            )}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <PokeEvolutions evolution={evolution} />
                </div>
            )}
        </div>
    );
}

export default Pokemon_detail;
