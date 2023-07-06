import React, { useState, useEffect } from 'react';
import './search.scss';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { searchPokemon } from '../../redux/action/action_search';
import CloseIcon from '@mui/icons-material/Close';
import { handleBreakpoints } from '@mui/system';

function Search() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(true);
    const closeMobileMenu = () => setClick(false);

    const [search, setSearch] = useState('');
    const [listSearch, setListSearch] = useState();
    let dispatch = useDispatch();
    const { listURL } = useSelector(state => state.listReducer);

    const handleSearch = e => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        if (search === '') {
            dispatch(searchPokemon(search));
            setListSearch(listURL);
            closeMobileMenu();
        } else {
            setListSearch(
                listURL.filter(item =>
                    item.name.toLowerCase().includes(search.toLowerCase()),
                ),
            );
        }
    }, [search]);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(searchPokemon(search));
        closeMobileMenu();
    };

    const handOnclick = e => {
        setSearch(e);
        closeMobileMenu();
    };

    return (
        <div className="search">
            <form>
                <input
                    type="search"
                    name=""
                    splaceholder="Search"
                    value={search}
                    onChange={handleSearch}
                    placeholder=" "
                    onInput={handleClick}
                />

                <input
                    type="submit"
                    name=""
                    value="Search"
                    onClick={handleSubmit}
                />
                <div
                    className={
                        !click ? 'search__dropdown' : 'search__dropdown active'
                    }
                >
                    {listSearch?.length === 0 ? (
                        <h3>Không có Pokemon này</h3>
                    ) : (
                        <ul>
                            {listSearch?.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => handOnclick(item.name)}
                                    >
                                        <span>{item.name}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </form>
        </div>
    );
}

export default Search;
