import React, {useState} from 'react';
import "./CryptoList.css"
import axios from "axios";
import CryptoItem from "../CryptoItem/CryptoItem";

const CryptoList = () => {

    const [cryptoData, setCryptoData] = useState([])
    const getDataCrypto = async () => {
        const url = "https://api.cryptorank.io/v1/currencies"
        const apiKey = "7adcfc2778b176c947a6296eea75acd64b20ba5d296b470dbc3fa7f1a2c7"
        try {
            const response = await axios.get(url, {
                params: {
                    api_key: apiKey
                }
            })
            setCryptoData(response.data)
        } catch (err) {
            console.error(err)
        }
    }
    let crypto = {
        "data": [
            {
                "id": 1,
                "rank": 1,
                "slug": "bitcoin",
                "name": "Bitcoin",
                "symbol": "BTC",
                "category": "Currency",
                "type": "coin",
                "volume24hBase": 144739.1814,
                "circulatingSupply": 19688375,
                "totalSupply": 21000000,
                "maxSupply": 21000000,
                "values": {
                    "USD": {
                        "price": 64778.2068977383,
                        "volume24h": 9375944638,
                        "high24h": 65636.8774551832,
                        "low24h": 64356.1582101147,
                        "marketCap": 1275377629230.26,
                        "percentChange24h": -0.3695,
                        "percentChange7d": -0.7952,
                        "percentChange30d": 1.0403,
                        "percentChange3m": 63.8573,
                        "percentChange6m": 96.3967
                    }
                },
                "lastUpdated": "2024-04-22T02:17:54.330Z",
                "tokens": []
            },
            {
                "id": 3,
                "rank": 2,
                "slug": "ethereum",
                "name": "Ethereum",
                "symbol": "ETH",
                "category": "Chain",
                "type": "coin",
                "volume24hBase": 1341035.1364,
                "circulatingSupply": 120071333,
                "totalSupply": 120072367,
                "values": {
                    "USD": {
                        "price": 3143.0032396494,
                        "volume24h": 4214877778,
                        "high24h": 3194.61038159195,
                        "low24h": 3125.76773864708,
                        "marketCap": 377384588608.022,
                        "percentChange24h": -0.189,
                        "percentChange7d": 0.1892,
                        "percentChange30d": -6.2175,
                        "percentChange3m": 35.957,
                        "percentChange6m": 78.1268
                    }
                },
                "lastUpdated": "2024-04-22T02:17:54.330Z",
                "tokens": []
            },
            {
                "id": 16,
                "rank": 3,
                "slug": "tether",
                "name": "Tether",
                "symbol": "USDT",
                "category": "Stablecoin",
                "type": "token",
                "volume24hBase": 23861904897.0363,
                "circulatingSupply": 109840251115,
                "totalSupply": 109840251115,
                "values": {
                    "USD": {
                        "price": 1.000285749416,
                        "volume24h": 23868723422,
                        "high24h": 1.000566773937,
                        "low24h": 1.00014919769,
                        "marketCap": 109871637902.609,
                        "percentChange24h": -0.021,
                        "percentChange7d": -0.0791,
                        "percentChange30d": -0.0043,
                        "percentChange3m": 0.1245,
                        "percentChange6m": -0.0118
                    }
                }
            }
        ]
    }

    return (
        <div className={"scrollableContainer"}>
            <ul className={"cryptoHorList"}>
                {crypto.data.map(item => (
                    <li className={"item"}><CryptoItem item={item}/></li>
                ))}
            </ul>
        </div>
    );
};

export default CryptoList;