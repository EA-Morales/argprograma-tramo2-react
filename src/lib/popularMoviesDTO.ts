export const popularMoviesDTO = (movies: any) => {
  return movies.map((movie: any) => {
    return {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: movie.poster_path,
    };
  });
};
