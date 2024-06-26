import React from 'react';
import "./Main.css"
import CryptoList from "../../components/CryptoList/CryptoList";
import Ruble from "../../assets/icomComponents/Ruble";


const Main = () => {
    // если не пришли данные с бд, до по дефолту 0
    let balance = 10000;
    return (
        <div className={"userRibben"}>
            <CryptoList/>
            <div className={"userCard"}>
                <div className={"entrailsCard"}>
                    <h5 className="titleUserCard">Баланс</h5>
                    <p className="userCardBalance">
                        {balance && 0 ? 0 : balance}
                        <Ruble size={25} color={"var(--tg-theme-text-color)"}/>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;