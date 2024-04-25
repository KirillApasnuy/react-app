import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main/Main";
import Chat from "../pages/Chat/Chat";
import Community from "../pages/Community/Community";
import Profile from "../pages/Profile/Profile";

const AppRoutes = () => {
    return (
        <div className={"userRoute"}>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/chat"} element={<Chat/>}/>
                <Route path={"/community"} element={<Community/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
            </Routes>
        </div>
    );
};

export default AppRoutes;