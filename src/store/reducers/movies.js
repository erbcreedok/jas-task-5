
const initState = {
    movies: []
}
export function movies(state = initState, action) {
    const newState = {...state}

    switch (action.type) {
        case 'movies/set':
            newState.movies = action.payload
            break;
        default:
            return state;
    }

    return newState
}
