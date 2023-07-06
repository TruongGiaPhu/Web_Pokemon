import React, { useState, useEffect } from 'react';

import PokemonList from '../../components/Pokemon_List/Pokemon_List';

// import axios from 'axios';

const Home = () => {
    // const [pokeData, setPokeData] = useState([]);

    // //phan trang
    // const [curentPage, setCurentPage] = useState(1);
    // const [postsPerPage] = useState(32);

    // const [loading, setLoading] = useState(true);

    // const { listProduct } = useSelector(state => state.listReducer);
    // const { search } = useSelector(state => state.SearchReducer);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         try {
    //             if (search === '') {
    //                 setPokeData(
    //                     listProduct.sort((a, b) => (a.id > b.id ? 1 : -1)),
    //                 );
    //                 setLoading(false);
    //             } else {
    //                 setPokeData(
    //                     listProduct
    //                         .sort((a, b) => (a.id > b.id ? 1 : -1))
    //                         .filter(item =>
    //                             item.name
    //                                 .toLowerCase()
    //                                 .includes(search.toLowerCase()),
    //                         ),
    //                 );
    //                 setLoading(false);
    //             }
    //         } catch (error) {}
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, [listProduct, search]);

    // useEffect(() => {

    // }, []);

    // const indexOfLastPost = curentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const curentPosts = pokeData.slice(indexOfFirstPost, indexOfLastPost);
    // console.log('🚀 ~ file: Home.js:14 ~ Home ~ pokeData:', curentPosts);
    return (
        // <div className="Home container">
        //     <Search />

        //     {loading ? (
        //         <Loading />
        //     ) : (
        //         <>
        //             <div className="Home__product">
        //                 {curentPosts.map(item => {
        //                     return (
        //                         <Item
        //                             key={item.id}
        //                             id={item.id}
        //                             img={
        //                                 item.sprites.other.home.front_default ||
        //                                 item.sprites.other.dream_world
        //                                     .front_default ||
        //                                 'https://www.kocel.com.tr/img/notfound.png'
        //                             }
        //                             name={item.name}
        //                             types={item.types}
        //                         />
        //                     );
        //                 })}
        //             </div>
        //             <Paginations
        //                 postsPerPage={postsPerPage}
        //                 totalPosts={pokeData.length}
        //                 paginate={paginate}
        //             />
        //         </>
        //     )}

        // </div>
        <div className="container">
            <PokemonList />
        </div>
    );
};

export default Home;
