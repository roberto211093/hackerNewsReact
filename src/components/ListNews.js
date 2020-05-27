import React from "react";
import {List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import moment from 'moment';
import 'moment/locale/es.js';
import {deleteNewsApi} from "../api/news";


const ListNews = (props) => {
    const {news, setNews, setError} = props;

    const detail = (url) => {
        window.open(url, '_blank');
    }

    const deleteNews = async (idNews) => {
        const res = await deleteNewsApi(idNews);
        if (res.message === "Success") {
            const newsFilter = news.filter((element) => element.objectID !== idNews);
            setNews(newsFilter)
            if (newsFilter.length === 0) {
                setError("No hay mas noticias disponible.")
            }
        }

    }

    return (
        <div>

            <List component="nav">
                {
                    news.map(item => (
                        <>
                            <ListItem button key={item.objectID}>
                                <ListItemText
                                    className="item"
                                    onClick={() => detail(item.url)}>
                                    <span className="item-title">{item.title}</span>
                                    <span className="item-author">{item.author}</span>
                                    <span className="item-time">{moment(item.created_at).calendar()}</span>
                                </ListItemText>
                                <ListItemIcon onClick={() => deleteNews(item.objectID)}>
                                    <Delete/>
                                </ListItemIcon>
                            </ListItem>
                            <Divider/>
                        </>
                    ))
                }
            </List>
        </div>
    )
}

export default ListNews
