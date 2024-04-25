import React, {useEffect, useState} from 'react';
import "./ListNews.css"

const ListNews = () => {
    const [listNews, setListNews] = useState([])
    useEffect(() => {
        const url = 'https://google-news13.p.rapidapi.com/search?keyword=%D0%9A%D1%80%D0%B8%D0%BF%D1%82%D0%B0&lr=en-US';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd5083739a0msh6f217dae822a02cp1fa92fjsn6b42a85e696f',
                'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(response => response.text())
            .then(text => setListNews(text));
    }, []);
    const renderBlockNews = (quantity) => {
        for (let i = 0; i < quantity || listNews.length; i++) {
            const blockNews = listNews[i]
            return (
                <div>
                    <h5>Новости</h5>
                    <li>
                        <div>
                            <h5>{blockNews.title}</h5>
                            <img src={blockNews.top_image}/>
                            <p>{blockNews.text}</p>
                        </div>
                    </li>
                </div>
            )
        }
    }
    return (
        <div className={"mainListNews"}>
            <ul>
                {/*{renderBlockNews(5)}*/}
            </ul>
        </div>
    );
};

export default ListNews;