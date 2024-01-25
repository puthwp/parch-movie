export const system_ok = {
    status: 200,
    description: "System up and running"
};

interface RestMovieThumb {
    movieId: String
    tile: String
    detail: String
    poster: Array<String>
    tags: Array<String>
    genre: Array<String>
    updated: EpochTimeStamp
    crated: EpochTimeStamp
}