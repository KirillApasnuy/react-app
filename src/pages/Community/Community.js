import React from 'react';
import "./Community.css"
import CoursesList from "../../components/CoursesList/CoursesList";
import ListNews from "../../components/LIstNews/ListNews";

const Community = () => {
    return (
        <div className={"communityBody"}>
            <CoursesList/>
            <div className={"tests"}>
                <h5 className={"testTitle"}>Тесты</h5>
                <div>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScUGnOKFnc9wTzXsDrzF-sopqU2-aWy4KKntZqVPJ8IpOgtHQ/viewform?embedded=true"
                        width="400vh" height="598" frameBorder="0" marginHeight="0" marginWidth="0">Загрузка…
                    </iframe>
                </div>
            </div>
            <ListNews/>
        </div>
    );
};

export default Community;