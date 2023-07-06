import React, { useEffect, useState } from 'react';
import SpanCustom from '../../components/SpanCustom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import pokeApi from '../../api/pokeApi';
function PokeEvolutions(evolution) {
    // console.log(
    //     '🚀 ~ file: poke_evolutions.js:7 ~ PokeEvolutions ~ evolution:',
    //     evolution,
    // );
    // const [data, setData] = useState();
    // console.log(
    //     '🚀 ~ file: poke_evolutions.js:8 ~ PokeEvolutions ~ data:',
    //     data,
    // );

    // // if (evolution !== undefined) {
    // //     setData(evolution);
    // // }
    // useEffect(() => {}, []);

    return (
        <>
            <div className="pokemon__detail__bottom">
                <h2>Evolutions</h2>

                {evolution.evolution !== undefined &&
                    evolution.evolution.length > 0 && (
                        <ul>
                            <li>
                                <Evolutions evo={evolution.evolution[0]} />
                            </li>
                            {evolution.evolution.length >= 2 && (
                                <li>
                                    {evolution.evolution[1].map((evo, i) => {
                                        return <Evolutions key={i} evo={evo} />;
                                    })}
                                </li>
                            )}

                            {evolution.evolution.length === 3 && (
                                <li>
                                    {evolution.evolution[2].map((evo, i) => {
                                        return <Evolutions key={i} evo={evo} />;
                                    })}
                                </li>
                            )}
                        </ul>
                    )}
            </div>
        </>
    );
}
export default PokeEvolutions;

const Evolutions = evo => {
    const [data, setData] = useState();

    const evoData = async () => {
        const res = await pokeApi.getPokemon(evo.evo);
        setData(res.data);
    };

    useEffect(() => {
        if (evo !== undefined) {
            evoData();
        }
    }, []);

    return (
        <>
            {data !== undefined && (
                <Link to={`/pokemon/${data.id}/${data.name}`}>
                    <div className="detal__img__evo">
                        <img
                            src={
                                data?.sprites?.other?.home.front_default ||
                                data?.sprites?.other?.dream_world
                                    .front_default ||
                                data?.sprites.front_default ||
                                'https://www.kocel.com.tr/img/notfound.png'
                            }
                            alt=""
                        />
                    </div>

                    <h3>
                        {data.name}
                        <span className="detail__id"> #{data.id}</span>{' '}
                    </h3>
                    <div className="detail__abilities">
                        {data.types.map((item, index) => {
                            return (
                                <SpanCustom key={index} color={item.type.name}>
                                    {item.type.name}
                                </SpanCustom>
                            );
                        })}
                    </div>
                </Link>
            )}
        </>
    );
};
