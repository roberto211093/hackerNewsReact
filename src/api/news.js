import {BASE_PATH, API_VERSION, TOKEN_NEWS} from "./config";
import { v4 as uuidv4 } from 'uuid';

const getNewsApi = () => {
    const url = `${BASE_PATH}/${API_VERSION}/news`;
    let token = localStorage.getItem(TOKEN_NEWS);
    if (!token) {
        token = uuidv4();
        localStorage.setItem(TOKEN_NEWS, token);
    }

    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    };

    return fetch(url, params).then(response => {
        return response.json();
    })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err.message;
        })
}

export const deleteNewsApi = (idNews) => {
    const url = `${BASE_PATH}/${API_VERSION}/delete-news`;
    let token = localStorage.getItem(TOKEN_NEWS);
    if (!token) {
        token = uuidv4();
        localStorage.setItem(TOKEN_NEWS, token);
    }

    let bodyData = {
        idNews: idNews
    }

    const params = {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    };

    return fetch(url, params).then(response => {
        return response.json();
    })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err.message;
        })
}

export default getNewsApi
