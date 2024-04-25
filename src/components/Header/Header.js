import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <button type="button" className={"btn btn-outline-light"} onClick={onClose}>Закрыть</button>
            <span className={'username'}>
                {user?.username}
            </span>
            <a href={"/"}><img src={"logo512.png"} width={40} height={40}/></a>
        </div>
    );
};

export default Header;
