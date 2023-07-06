import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import './Modal_Popup.scss';
import pokeApi from '../../api/pokeApi';

const ModalPopup = ({ name, url, hide }) => {
    const [data, setData] = useState();

    const loadData = async () => {
        const res = await pokeApi.getAbility(url.split('/')[6]);
        setData(res.data);
        console.log(
            '🚀 ~ file: Modal_Popup.js:14 ~ loadData ~ res.data:',
            res.data.effect_entries[1],
        );
    };

    useEffect(() => {
        if (url !== undefined) {
            loadData();
        }
    }, []);

    return (
        <>
            {data !== undefined && (
                <>
                    <div className={hide ? 'Modal_Popup ' : 'Modal_Popup hide'}>
                        <div className="Modal_Popup_inner">
                            <div className="Modal_Popup_header">
                                {' '}
                                {name}
                                <CloseIcon />
                            </div>
                            <div className="Modal_Popup_body">
                                {data.effect_entries[1].effect}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ModalPopup;
