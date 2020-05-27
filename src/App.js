import React, {useEffect, useState} from 'react';
import './App.css';
import {unstable_createMuiStrictModeTheme as createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import ListNews from "./components/ListNews";
import Navbar from "./components/Navbar";
import getNewsApi from "./api/news";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#333333",
        }
    },
});

const estilos = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.primary,
        padding: theme.spacing(3)
    }
}))

function App() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState("")
    const classes = estilos();

    useEffect(() => {
        const fetchData = async () => {
            const res = await getNewsApi();
            if (res['news'] && res['news'].length > 0) {
                setNews(res['news']);
            } else {
                setError("No hay mas noticias disponible.");
            }
        }
        fetchData();
    }, [setNews]);

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Navbar/>
                <div className={classes.content}>
                    <div className={classes.toolbar}/>
                    <div className={classes.toolbar}/>
                    {!error ? <ListNews news={news} setNews={setNews} setError={setError}/> : <div>{error}</div>}
                </div>
            </div>
        </ThemeProvider>

    );
}

export default App;
