<template>
  <div :class="$style.theHeader">
    <div :class="$style.logo">
      <router-link to="/">
        <img
          src="../assets/tmdb.svg"
          alt="logo"
        />
      </router-link>
    </div>
    <div>MOVIE APP</div>
    <div>
      <el-select
        v-model="searchResult"
        filterable
        remote
        reserve-keyword
        :remote-method="querySearch"
        placeholder="Search movie"
        size="small"
        @change="handleSelect"
      >
        <i
          slot="prefix"
          class="el-icon-search el-input__icon"
        >
        </i>
        <el-option
          v-for="item in searchMovieList"
          :key="`${item.id}_${item.title}`"
          :label="item.title"
          :value="item.id"
        />
      </el-select>
      <!--      <el-button type="text">-->
      <!--        <router-link to="/login">-->
      <!--          Log In-->
      <!--        </router-link>-->
      <!--      </el-button>-->
      <!--      <span style="margin: 0 5px;">/</span>-->
      <!--      <el-button type="text">-->
      <!--        <router-link to="/registration">-->
      <!--          Registration-->
      <!--        </router-link>-->
      <!--      </el-button>-->
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

import { loadInfoAboutMovie } from '../05-components/movieInfo'

export default {
  name: 'TheHeader',
  data () {
    return {
      searchResult: ''
    }
  },
  computed: {
    ...mapState('main', ['searchMovieList', 'movie'])
  },
  methods: {
    async handleSelect (item) {
      try {
        const movie = await loadInfoAboutMovie(this.$route.params.id)
        await this.$router.push(`/movie/${item}`)
        this.SET_MOVIE(movie)
        this.searchResult = ''
      } catch (error) {
        if (error.message.split(' ').includes('404')) {
          await this.$router.push('/404')
        }
      } finally {
        this.searchResult = ''
        this.SET_SEARCH_MOVIE_LIST([])
      }
    },
    async querySearch (query) {
      if (query) {
        await this.searchMovies(query)
      }
    },
    ...mapActions('main', ['searchMovies']),
    ...mapMutations('main', ['SET_SEARCH_MOVIE_LIST', 'SET_MOVIE'])
  }
}
</script>

<style module lang="scss">
.theHeader {
  width: 100%;
  height: 8%;
  background: mediumseagreen;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .logo {
    width: 10%;
    img {
      width: 90%;
      cursor: pointer;
    }
  }
  a {
    color: black;
  }
  a:hover {
    color: white;
  }
  :global(.router-link-active) {
    color: white;
  }
  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .value {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .link {
        font-size: 12px;
        color: #b4b4b4;
      }
    }
  }
}
</style>
