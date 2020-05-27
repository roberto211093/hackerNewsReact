import React from "react";
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";


const useStyle = makeStyles((theme) => ({
    toolbar: {
        display: "block",
        padding: "25px 20px"
    }
}));

const Navbar = () => {
    const classes = useStyle();
    return (
        <AppBar color="primary">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h3">
                    HN Feed
                </Typography>
                <Typography variant="subtitle1">
                    {"We <3 hacker news!"}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
