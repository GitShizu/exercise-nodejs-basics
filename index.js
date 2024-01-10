import dotenv from "dotenv"
dotenv.config()
import fs from "fs"
import path from "path"
const apiKey = process.env.TMDB_API_KEY

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

fetch(url)
.then(response=> response.json)
.then(obj=> {
    if(obj.status.code>0){
        console.error('API call went wrong', obj.status_message);
    }else{
        const firstMovie = obj.results.length>0? obj.results[0].title : 'No movie found';
        console.log(firstMovie);
    }
})
.catch(error=> console.error('Error', error));

