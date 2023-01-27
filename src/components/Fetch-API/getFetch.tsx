export const API_URL: string = 'https://api.themoviedb.org/3/';
export const API_KEY: string | undefined = '9b874d929507649178ca7501fdc5a82b&language=en-US';

export const getFetch = (state: Function, item?: string) => {
    fetch(`${API_URL}movie/${item ? item : 'popular'}?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => state(data.results))
}

export const searchFetch = (state: Function, query?: string) => {
    fetch(`${API_URL}search/movie?api_key=${API_KEY}&query=${query}`)
    .then(res => res.json())
    .then(data => state(data.results))
}

export interface Results {
    backdrop_path: string;
    id: number;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    title?: string;
    vote_average: number;
    budget?: number;
    runtime?: number;
    revenue?: number;
    release_data: number;
    tagline?: string;
    release_date?: string;
  }
  
  export interface MoviesItem {
    page: number;
    results: Results[];
    total_pages: number;
    total_results: number;
  }
  




