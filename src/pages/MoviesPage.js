import {useEffect, useState} from "react";
import {Button, Container, Grid, TextField} from "@mui/material";
import {MovieItem} from "../components/MovieItem";

export function MoviesPage() {
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        loadDefaultMovies()
    }, [])

    function loadDefaultMovies() {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=true&page=3&with_watch_monetization_types=flatrate`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
            })
    }

    function searchMovies() {
        if (!query || query.length < 1) {
            loadDefaultMovies()
            return
        }
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&page=2&include_adult=false&query=${query}`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
            })
    }

    return (
        <Container maxWidth="xl">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h1>Movies</h1>
                <div style={{ marginLeft: 'auto' }}>
                    <TextField value={query} onChange={(e) => setQuery(e.target.value)} size="small" label="Search" />
                    <Button onClick={searchMovies}>Search</Button>
                </div>
            </div>
            <Grid container spacing={2}>
                {movies.map((movie) => (
                    <Grid item xs={12 / 5}>
                        <MovieItem key={movie.id} movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
