import axiosClient from './axiosClient';

const pokeApi = {
    getLists: number => {
        const url = `pokemon/?offset=${number}&limit=20 `;
        return axiosClient(url);
    },

    getPokemonList: name => {
        const url = `pokemon/${name}`;
        return axiosClient(url);
    },
    getPokemon: (name, id) => {
        const url = `pokemon/${name || id}`;
        return axiosClient(url);
    },

    getSpecies: id => {
        const url = `pokemon-species/${id}`;
        return axiosClient(url);
    },
    getEvolution: id => {
        const url = `evolution-chain/${id}`;
        return axiosClient(url);
    },
    getAbility: id => {
        const url = `ability/${id}`;
        return axiosClient(url);
    },
    // getTvList: (type, page) => {
    //     const url = 'tv/' + tvType[type];
    //     return axiosClient(url, page);
    // },
    // getVideos: (cate, id) => {
    //     const url = category[cate] + '/' + id + '/videos';
    //     return axiosClient(url);
    // },
    // search: (cate, page, query) => {
    //     const url = 'search/' + category[cate];
    //     return axiosClient(url, query, page);
    // },
    // detail: (cate, id, params) => {
    //     const url = category[cate] + '/' + id;
    //     return axiosClient(url, params);
    // },
    // credits: (cate, id) => {
    //     const url = category[cate] + '/' + id + '/credits';
    //     return axiosClient(url);
    // },
    // similar: (cate, id) => {
    //     const url = category[cate] + '/' + id + '/similar';
    //     return axiosClient(url);
    // },
};

export default pokeApi;
