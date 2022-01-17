import axios from 'axios'

import { API_KEY, BASE_URL } from '../../../00-low-lavel-stuff/config'
import * as types from './mutation-types'

export default {
  async newToken () {
    const response = await axios.get(`${BASE_URL}/authentication/token/new?api_key=${API_KEY}`)
    return response.data
  },
  async getPopularMoviesPage (context, page) {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
    // context.commit(types.GET_MOVIE_PAGE, response.data)
    return response.data
  },
  async getNowPlayingMoviesPage (context, page) {
    const response = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`)
    return response.data
  },
  async getMovieDetails (context, movieId) {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    return response.data
  },
  async getMovieActors (context, movieId) {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    return response.data.cast
  },
  async getSimilarMovies (context, movieId) {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US`)
    return response.data
  },
  async getMovieReviews (context, { movieId, page }) {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`)
    return response.data
  },
  async getMovieTrailer (context, movieId) {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
    return response.data
  },
  async searchMovies (context, query) {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    context.commit(types.SET_SEARCH_MOVIE_LIST, response.data.results)
    // return response.data
  },
  async getLatestMoviesPage (context) {
    const response = await axios.get(`${BASE_URL}/movie/latest?api_key=${API_KEY}&language=en-US`)
    context.commit(types.SET_LATEST_MOVIE_PAGE, response.data)
  }
}
