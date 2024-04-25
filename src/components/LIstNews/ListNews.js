import React, {useEffect, useState} from 'react';
import "./ListNews.css"

const ListNews = () => {
    const [listNews, setListNews] = useState([])
    useEffect(() => {
        const url = 'https://newsnow.p.rapidapi.com/newsv2';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'd5083739a0msh6f217dae822a02cp1fa92fjsn6b42a85e696f',
                'X-RapidAPI-Host': 'newsnow.p.rapidapi.com'
            },
            body: {
                query: 'Криптовалюта',
                time_bounded: true,
                from_date: '01/02/2021',
                to_date: '05/06/2021',
                location: 'us',
                language: 'ru',
                page: 1
            }
        };

        fetch(url, options)
            .then(response => setListNews(response.text()))
            .catch(err => console.error(err))
            // .then(res => setListNews(res));
        console.log(listNews)
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