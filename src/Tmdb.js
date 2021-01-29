const {API_TOKEN} = process.env;
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netlflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language&language=pt-BR&api_key=${API_TOKEN}`)
            },

            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_TOKEN}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_TOKEN}`)
            }
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {}

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_TOKEN}`)
                    break
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_TOKEN}`)
                    break
                default:
                    info = null;
                    break
            }
        }
        return info
    }
}