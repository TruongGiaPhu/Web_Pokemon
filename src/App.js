import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { publicRoutes } from './router';
import DefaulLayout from './components/layout/DefaultLayout';
import { useDispatch, useSelector } from 'react-redux';
import { loadURLAction, loadProductsAction } from './redux/action/action';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import axios from 'axios';

function App() {
    // let dispatch = useDispatch();

    // const { listURL } = useSelector(state => state.listReducer);

    // useEffect(() => {
    //     dispatch(loadURLAction());
    // }, []);

    // useEffect(() => {
    //     dispatch(loadProductsAction(listURL));
    // }, [listURL]);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {publicRoutes?.map((route, index) => {
                        const Layout =
                            route.layout === null ? Fragment : DefaulLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
                <ScrollToTop />
            </BrowserRouter>
        </div>
    );
}

export default App;
