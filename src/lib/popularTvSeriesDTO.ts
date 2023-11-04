export const popularTvSeriesDTO = (series: any) => {
  return series.map((serie: any) => {
    return {
      id: serie.id,
      title: serie.name,
      overview: serie.overview,
      poster_path: serie.poster_path,
    };
  });
};
