<template>
  <div :class="$style.popularMovies">
    <div
      v-for="item in popularMoviesPage.results"
      :key="item.id"
      :class="$style.popularMovieBlock"
      @click="openMovieCard(item)"
    >
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
import { mapActions, mapState } from 'vuex'

import { IMAGE_PATH, createLoading, errorNotification } from '../00-low-lavel-stuff/config'

export default {
  name: 'Home',
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
      return this.popularMoviesPage.total_pages > 500 ? 5000 : this.popularMoviesPage.total_pages
    },
    ...mapState('main', ['popularMoviesPage'])
  },
  methods: {
    async choosePage (size) {
      const loading = createLoading()
      try {
        await this.getPopularMoviesPage(size)
      } catch (error) {
        await errorNotification(error)
      } finally {
        loading.close()
      }
    },
    openMovieCard (movie) {
      console.log(movie)
    },
    ...mapActions('main', ['getPopularMoviesPage'])
  },
  async mounted () {
    const loading = createLoading()
    try {
      await this.getPopularMoviesPage(1)
    } catch (error) {
      await errorNotification(error)
    } finally {
      loading.close()
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
    img {
      width: 90%;
    }
    :global(.el-card__body) {
      padding: 10px;
    }
  }
}
</style>
