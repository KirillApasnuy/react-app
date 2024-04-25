import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import AppRoutes from "./utils/AppRoutes";
import DownNavBar from "./components/DownNavBar/DownNavBar";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])
    let lastY = 1;
    document.addEventListener("touchmove", function (event) {
        var lastS = document.documentElement.scrollTop;
        if(lastS == 0 && (lastY-event.touches[0].clientY)<0 && event.cancelable){
            event.preventDefault();
            event.stopPropagation();
        }
        lastY = event.touches[0].clientY;
    },{passive: false});
    return (
        <div className="App">
            <Header />
            <AppRoutes/>
            <DownNavBar/>
        </div>
    );
}

export default App;
