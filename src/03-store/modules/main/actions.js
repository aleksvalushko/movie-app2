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
    context.commit(types.GET_POPULAR_MOVIE_PAGE, response.data)
  }
}
