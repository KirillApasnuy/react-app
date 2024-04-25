import React, {useEffect, useState} from 'react';
import axios from "axios";
import CoursesItem from "../CoursesItem/CoursesItem";
import "./CoursesList.css"
const CoursesList = () => {
    // const [playlist, setPlaylist] = useState([]);
    // useEffect( async () => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://youtube138.p.rapidapi.com/playlist/videos/',
    //         params: {
    //             id: 'PLi3Vwz_cwl_YVbJi3Sksy5eb4z5bnEouV',
    //             hl: 'en',
    //             gl: 'US'
    //         },
    //         headers: {
    //             'X-RapidAPI-Key': 'd5083739a0msh6f217dae822a02cp1fa92fjsn6b42a85e696f',
    //             'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    //         }
    //     };
    //     try {
    //         const response = await axios.request(options);
    //         setPlaylist(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }, []);
    // console.log(playlist)
    // const playlistCourse = [
    //     {url: "https://www.youtube.com/embed/rKAz99zMrxA?si=usUvClSKXTyT7EtZ"},
    //     {url: "https://www.youtube.com/embed/ijrRVgI9OZk?si=Rkyqupx9gyBkzmuz"},
    //     {url: "https://www.youtube.com/embed/L06olf9zcYo?si=oWHNgWFWC0R6FBfo"}
    // ]
    return (
        <div className={"coursesBloc"}>
            <h5 className={"coursesTitle"}>Курсы по крипте</h5>
            <div className={"scrollableContainer"}>
                <ul className={"cryptoHorList"}>
                    <li className={"item"}>
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/rKAz99zMrxA?si=4Sk5P_-i3Gu4a3vu"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </li>
                    <li className={"item"}>
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/ijrRVgI9OZk?si=Qu4Aek6_iozGpjoM"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </li>
                    <li className={"item"}>
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/L06olf9zcYo?si=AbCKnLMF_5eCp-Hb"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    </li>
                </ul>
            </div>
        </div>);
};

export default CoursesList;