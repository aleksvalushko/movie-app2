<template>
  <div :class="$style.popularMovies">
    <div
      v-for="item in moviesPage.results"
      :key="item.id"
      :class="$style.popularMovieBlock"
      @click="openMovieCard(item)"
    >
      <router-link :to="`/movie/${item.id}`">
        <el-card
          :class="$style.posterCard"
          shadow="hover"
        >
          <img
            :src="`${imagePath}${item.poster_path}`"
            class="image"
            :alt="item.title + 'poster'"
          />
          <div style="padding: 14px;">
            <span>{{ item.title }}</span>
          </div>
        </el-card>
      </router-link>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :pager-count="7"
      :current-page.sync="currentPage"
      :page-count="pageCounter"
      :total="totalPagination"
      @current-change="choosePage"
    />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

import { IMAGE_PATH, createLoading, errorNotification } from '../00-low-lavel-stuff/config'

export default {
  name: 'Movies',
  components: {},
  data () {
    return {
      currentPage: 1,
      pageCounter: 10,
      imagePath: IMAGE_PATH
    }
  },
  computed: {
    totalPagination () {
      return this.moviesPage.total_pages > 500 ? 5000 : this.moviesPage.total_pages
    },
    ...mapState('main', ['moviesPage'])
  },
  methods: {
    async choosePage (size) {
      if (this.$route.name === 'PopularMovies') {
        await this.loadMovies(size, this.getPopularMoviesPage)
      }
      if (this.$route.name === 'NowPlaying') {
        await this.loadMovies(size, this.getNowPlayingMoviesPage)
      }
    },
    openMovieCard (movie) {
    },
    async loadMovies (page, requestName) {
      const loading = createLoading()
      try {
        const response = await requestName(page)
        this.SET_MOVIE_PAGE(response)
      } catch (error) {
        await errorNotification(error)
      } finally {
        loading.close()
      }
    },
    ...mapActions('main', ['getPopularMoviesPage', 'getNowPlayingMoviesPage']),
    ...mapMutations('main', ['SET_MOVIE_PAGE'])
  },
  async mounted () {
    await this.loadMovies(1, this.getPopularMoviesPage)
  },
  watch: {
    async $route(to) {
      if (to.name === 'PopularMovies') {
        await this.loadMovies(1, this.getPopularMoviesPage)
        this.currentPage = 1
        return
      }
      if (to.name === 'NowPlaying') {
        await this.loadMovies(1, this.getNowPlayingMoviesPage)
        this.currentPage = 1
      }
    }
  }
}
</script>

<style module lang="scss">
.popularMovies {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  .popularMovieBlock {
    width: 25%;
  }
  .posterCard {
    margin: 10px;
    height: 90%;
    cursor: pointer;
    background-color: lightgray;
    border: none;
    img {
      width: 90%;
    }
    :global(.el-card__body) {
      padding: 10px;
    }
  }
}
</style>
