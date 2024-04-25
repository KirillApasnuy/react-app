import React from 'react';
import "./CryptoItem.css"
import {ReactComponent as Ruble} from "../../assets/icon/ruble.svg";
import Bitcoin from "../../assets/icomComponents/Bitcoin";
import Ethereum from "../../assets/icomComponents/Ethereum";
import Tether from "../../assets/icomComponents/Tether";
import ArrowDownRight from "../../assets/icomComponents/ArrowDownRight";
import ArrowUpRight from "../../assets/icomComponents/ArrowUpRight";
const CryptoItem = ({item}) => {
    const symbol = {
        BTC: <Bitcoin width={40} height={40}/>,
        ETH: <Ethereum width={40} height={40}/>,
        USDT: <Tether width={40} height={40}/>
    }
    return (
        <div className="card">
            <div className={"card-body"}>
                <div className={"allLineCrypto"}>
                    {symbol[item.symbol]}
                    <div>
                    <span
                        className={"firstLineCrypto"}>{item.name} {Math.ceil(Number(item.values.USD.price * 93)).toLocaleString()}
                        <Ruble/> </span>
                        <div className={"secondLineCrypto"}>
                            <div className={"arrows"}>{item.values.USD.percentChange24h < 0 ?
                                <ArrowDownRight size={20}/> :
                                <ArrowUpRight size={20}/>}</div>
                            {item.values.USD.percentChange24h}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoItem;