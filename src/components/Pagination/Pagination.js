import React, { useState, useEffect, memo } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './pagination.scss';
import { useNavigate, useParams } from 'react-router-dom';

function Paginations({ postsPerPage, totalPosts }) {
    // const [page, setPage] = useState(1);
    // console.log(
    //     '🚀 ~ file: Pagination.js:12 ~ Paginations ~ page:',
    //     typeof page,
    // );

    // function range(start, end) {
    //     return Array.from(Array(end - start + 1), (_, i) => i + start);
    // }

    // var sideWidth = maxLength < 9 ? 1 : 2;
    // var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    // var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    // if (totalPages <= maxLength) {
    //     return range(1, totalPages);
    // }

    // if (page <= maxLength - sideWidth - 1 - rightWidth) {
    //     return range(1, maxLength - sideWidth - 1).concat(
    //         0,
    //         range(totalPages, sideWidth + 1, totalPages),
    //     );
    // }
    // if (page >= totalPages - sideWidth - 1 - rightWidth) {
    //     return range(1, sideWidth).concat(
    //         0,
    //         range(
    //             totalPages - sideWidth - 1 - rightWidth - leftWidth,
    //             totalPages - sideWidth,
    //         ),
    //     );
    // }

    //ceil làm tròn lên

    // const handleScroll = () => {
    //     if (window.innerWidth <= 600) {
    //         setNumber(0);
    //     } else {
    //         setNumber(2);
    //     }
    // };

    // useEffect(() => {
    //     handleScroll();
    // }, []);

    // useEffect(() => {

    // }, [pageNumber]);

    // window.addEventListener('resize', handleScroll);
    // const pageNumbers = [];
    // const [number, setNumber] = useState(2);

    // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    //     pageNumbers.push(i);
    // }

    const numberOfPages = [];
    console.log('🚀 ~ file: Pagination.js:80 ~ numberOfPages:', numberOfPages);
    const history = useNavigate();
    // dung de them page

    const { pageNumber } = useParams();
    // const pages = numberOfPages.length;
    let dotsInitial = '...';
    let dotsLeft = '... ';
    let dotsRight = ' ...';

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        numberOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);
    const [arrOfCurrButton, setArrOfCurrButton] = useState([]);

    const pageNumbers = item => {
        if (typeof item === 'number') {
            history(`/page=${item}`);
        } else if (item === dotsInitial) {
            history(`/page=${arrOfCurrButton[arrOfCurrButton.length - 3] + 1}`);
            // setCurrentButton();
        } else if (item === dotsRight) {
            history(`/page=${arrOfCurrButton[3] + 2}`);
        } else if (item === dotsLeft) {
            history(`/page=${arrOfCurrButton[3] - 2}`);
        }

        setCurrentButton(item);
    };

    useEffect(() => {
        if (pageNumber !== undefined) {
            setCurrentButton(Number(pageNumber));
        } else {
            setCurrentButton(1);
        }

        // setCurrentButton(Number(pageNumber));
        let tempNumberOfPages = [...numberOfPages];

        // let dotsInitial = '...';
        // let dotsLeft = '... ';
        // let dotsRight = ' ...';

        if (numberOfPages.length < 6) {
            tempNumberOfPages = numberOfPages;
        } else if (currentButton >= 1 && currentButton <= 3) {
            tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
        } else if (currentButton === 4) {
            const sliced = numberOfPages.slice(0, 5);

            tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
        } else if (
            currentButton > 4 &&
            currentButton < numberOfPages.length - 2
        ) {
            // from 5 to 8 -> (10 - 2)
            const sliced1 = numberOfPages.slice(
                currentButton - 2,
                currentButton,
            ); // sliced1 (5-2, 5) -> [4,5]
            const sliced2 = numberOfPages.slice(
                currentButton,
                currentButton + 1,
            ); // sliced1 (5, 5+1) -> [6]
            tempNumberOfPages = [
                1,
                dotsLeft,
                ...sliced1,
                ...sliced2,
                dotsRight,
                numberOfPages.length,
            ]; // [1, '...', 4, 5, 6, '...', 10]
        } else if (currentButton > numberOfPages.length - 3) {
            // > 7
            const sliced = numberOfPages.slice(numberOfPages.length - 4); // slice(10-4)
            tempNumberOfPages = [1, dotsLeft, ...sliced];
        } else if (currentButton === dotsInitial) {
            // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
            // arrOfCurrButtons[3] = 4 + 1 = 5
            // or
            // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
            // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
            setCurrentButton(arrOfCurrButton[arrOfCurrButton.length - 3] + 1);
        } else if (currentButton === dotsRight) {
            setCurrentButton(arrOfCurrButton[3] + 2);
        } else if (currentButton === dotsLeft) {
            setCurrentButton(arrOfCurrButton[3] - 2);
        }

        setArrOfCurrButton(tempNumberOfPages);
    }, [currentButton, pageNumber]);

    return (
        <ul className="paganation">
            <li
                className={`${
                    currentButton === 1
                        ? 'page_item previous_page disabled'
                        : 'page_item previous_page'
                }`}
                onClick={() =>
                    setCurrentButton(prev => (prev === 1 ? prev : prev - 1))
                }
            >
                prev
            </li>

            {arrOfCurrButton.map((item, index) => {
                return (
                    <li
                        key={index}
                        className={`${
                            currentButton === item
                                ? 'page_item current_page active'
                                : 'page_item current_page'
                        }`}
                        onClick={() => pageNumbers(item)}
                    >
                        {item}
                    </li>
                );
            })}
            <li
                className={`${
                    currentButton === numberOfPages.length
                        ? 'page_item previous_page disabled'
                        : 'page_item next_page'
                }`}
                onClick={() =>
                    setCurrentButton(prev =>
                        prev === numberOfPages.length ? prev : prev + 1,
                    )
                }
            >
                next
            </li>
        </ul>
    );
}

export default memo(Paginations);
