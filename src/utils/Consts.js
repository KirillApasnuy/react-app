import Bitcoin from "../resorces/icomComponents/Bitcoin";
import Ethereum from "../resorces/icomComponents/Ethereum";
import Tether from "../resorces/icomComponents/Tether";
import React from "react";

export const symbol = {
    BTC: <Bitcoin width={40} height={40}/>,
    ETH: <Ethereum width={40} height={40}/>,
    USDT: <Tether width={40} height={40}/>
}