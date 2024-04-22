import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import AppRoutes from "./utils/AppRoutes";
import DownNavBar from "./components/DownNavBar/DownNavBar";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <AppRoutes/>
            <DownNavBar/>
        </div>
    );
}

export default App;
