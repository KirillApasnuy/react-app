import React from 'react';
import "./Profile.css"
import {useTelegram} from "../../hooks/useTelegram";
import Bitcoin from "../../resorces/icomComponents/Bitcoin";
import Ethereum from "../../resorces/icomComponents/Ethereum";
import Tether from "../../resorces/icomComponents/Tether";
import {ReactComponent as Ruble} from "../../resorces/icon/ruble.svg";

const Profile = () => {
        // почему то не получилось сделать экспорт этого объекта, по этому так(
        const symbol = {
            BTC: <Bitcoin width={40} height={40}/>,
            ETH: <Ethereum width={40} height={40}/>,
            USDT: <Tether width={40} height={40}/>
        }
        // типо получили данные с бэка по объёму портфеля
        // price указан в долларах
        // предпологается использование актуального курса всей валюты
        const briefcase = [
            {
                symbol: "BTC", quantity: 2, price: 64778
            },
            {
                symbol: "ETH", quantity: 10, price: 3143
            },
            {
                symbol: "USDT", quantity: 100000, price: 1
            }
        ]

        const {user} = useTelegram()
        return (
            <div className={"profileBody"}>
                <div className={"contactInformation"}>
                    <div className={"contentContactInformation"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white"
                             className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd"
                                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                        <h6>name: {user?.name}</h6>
                    </div>
                </div>
                <div className={"briefcase"}>
                    <h5>Портфель</h5>
                    <ul className="list-group">
                        {briefcase.map(item => (
                            <li className="list-group-item">{symbol[item.symbol]} Кол-во: {item.quantity} Цена: {Math.ceil(Number(item.price * item.quantity * 93 )).toLocaleString()}<Ruble/></li>
                        ))}
                    </ul>
                </div>
                <div className={"setting"}>

                    <div className="loading spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }
;

export default Profile;