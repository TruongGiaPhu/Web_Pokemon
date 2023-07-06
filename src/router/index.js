import Home from '../pages/Home/Home';
import Pokemon_detail from '../pages/Pokemon_detail';
import Berries from '../pages/Berries/Berries';
import PokeItem from '../pages/Poke-Item/Poke-Item';

const publicRoutes = [
    {
        path: '/page=:pageNumber',
        component: Home,
    },
    {
        path: '/',
        component: Home,
    },

    {
        path: '/pokemon/:id/:name',
        component: Pokemon_detail,
    },
    {
        path: '/Berries',
        component: Berries,
    },
    {
        path: '/Items',
        component: PokeItem,
    },
    // {
    //     path: '/san-pham/chi-tiet/:name/:id',
    //     component: Product_detail,
    // },
    // {
    //     path: '/dang-nhap',
    //     component: Login,
    //     layout: null,
    // },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
