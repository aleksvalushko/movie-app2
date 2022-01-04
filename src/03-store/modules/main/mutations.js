import lodash from 'lodash'

import * as types from './mutation-types'

export default {
  [types.GET_POPULAR_MOVIE_PAGE] (state, payload) {
    state.popularMoviesPage = lodash.cloneDeep(payload)
  }
}
