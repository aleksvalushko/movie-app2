<template>
  <div :class="$style.movie">
    <div :class="$style.movieTitle">
      {{ movie.title }}
    </div>
    <div style="background-color: rgba(119, 136, 153, 0.8); border-radius: 5px; padding: 5px 0 10px 0;">
      <div style="width: 100%; display: flex; margin: 10px 0;">
        <div :class="$style.moviePoster">
          <img
            v-if="movie.poster_path"
            :src="`${imagePath}${movie.poster_path}`"
            :alt="movie.title + 'poster'"
          />
          <img
            v-else
            src="../assets/noImage.jpg"
            :alt="movie.title + 'poster'"
          />
        </div>
        <div :class="$style.movieOverviewWrapper">
          <div :class="$style.movieOverview">
            {{ movie.overview }}
          </div>
        </div>
      </div>
      <div :class="$style.movieDescription">
        <div><span>Release year:</span> {{ getMovieReleaseYear }}</div>
        <div><span>Rating:</span> {{ movie.vote_average }} ({{ movie.vote_count }})</div>
        <div><span>Countries:</span> {{ getCountriesArray }}</div>
        <div><span>Genres:</span> {{ getGenresArray }}</div>
        <div><span>Spoken languages:</span> {{ getSpokenLanguagesArray }}</div>
        <div><span>Runtime:</span> {{ `${movie.runtime} min. / ` + getRuntime }}</div>
        <div><span>Casts:</span> {{ getCastsList }}</div>
      </div>
      <div style="width: 100%;">
        <div style="font-size: 20px; text-decoration: underline; margin-bottom: 20px;">
          Similar movies:
        </div>
        <carousel
          pagination-color="darkgray"
          :per-page="4"
          :autoplay="false"
          :autoplay-timeout="7000"
          :loop="true"
          :mouse-drag="true"
          :navigation-enabled="false"
          class="slider"
          navigation-next-label="&rsaquo;"
          navigation-prev-label="&lsaquo;"
          :pagination-enabled="false"
        >
          <slide
            v-for="item in similarMoviesList"
            :key="`${item.id}_${item.title}`"
            class="slider-card"
          >
            <div
              :class="$style.posterCard"
            >
              <img
                :src="`${imagePath}${item.poster_path}`"
                class="image"
                :alt="item.title + 'poster'"
              />
              <div
                style="padding: 14px; cursor: pointer;"
                @click="openMovie(item.id)"
              >
                <span
                  :class="$style.similarMovieTitle"
                >{{ item.title }}</span>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
      <div>
        <div :class="$style.movieTrailer">
          {{ movie.title }} ({{ getMovieReleaseYear }}) watch the trailer
        </div>
        <iframe
          width="560"
          height="315"
          :src="getMovieTrailer"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div style="padding: 10px;">
        <div style="font-size: 20px; text-decoration: underline; margin-bottom: 20px;">
          Reviews:
        </div>
        <div
          v-for="review in movieReviewsList"
          :key="review.id"
          :class="$style.reviewBlock"
        >
          <div style="width: 10%;">
            <img
              v-if="review.author_details.avatar_path"
              :src="`${imagePath}${endOfImageUrl(review)}`"
              alt="avatar"
            />
            <img
              v-else
              src="../assets/noImage.jpg"
              alt="avatar"
            />
          </div>
          <div style="width: 88%;">
            <div style="text-align: left; font-size: 15px; color: darkgray;">
              <span>{{ review.author_details.username }}, </span>
              <span>оставлен {{ getReviewDateAndTime(review.created_at) }}</span>
            </div>
            <div style="text-align: justify; line-height: 1.3; font-size: 13px;">
              {{ review.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import { mapActions, mapMutations, mapState } from 'vuex'

import { IMAGE_PATH } from '../00-low-lavel-stuff/config'
import { loadInfoAboutMovie, MONTHS } from '../05-components/movieInfo'

export default {
  name: 'MovieCard',
  components: { Carousel, Slide },
  data () {
    return {
      imagePath: IMAGE_PATH
    }
  },
  computed: {
    getCountriesArray () {
      const countries = []
      this.movie.production_countries?.map(country => countries.push(country.name))
      return countries.join(', ')
    },
    getGenresArray () {
      const genres = []
      this.movie.genres?.map(genre => genres.push(genre.name))
      return genres.join(', ')
    },
    getSpokenLanguagesArray () {
      const spokenLanguages = []
      this.movie.spoken_languages?.map(spokenLanguage => spokenLanguages.push(spokenLanguage.english_name))
      return spokenLanguages.join(', ')
    },
    getCastsList () {
      const actors = []
      this.actorsList?.map(actor => actors.push(actor.name))
      return actors.join(', ')
    },
    getMovieReleaseYear () {
      return this.movie.release_date.split('-')[0]
    },
    getRuntime () {
      const runtimeHours = Math.trunc(this.movie.runtime / 60)
      let runtimeMinutes = this.movie.runtime - (runtimeHours * 60)
      if (runtimeMinutes < 10) {
        runtimeMinutes = '0' + runtimeMinutes
      }
      return `${runtimeHours} : ${runtimeMinutes}`
    },
    getMovieTrailer () {
      if (this.movieTrailersList.length > 0) {
        return `https://www.youtube.com/embed/${this.movieTrailersList[0].key}`
      }
      return ''
    },
    ...mapState('main', ['movie', 'actorsList', 'similarMoviesList', 'movieReviewsList', 'movieTrailersList'])
  },
  methods: {
    async openMovie (item) {
      try {
        const movie = await loadInfoAboutMovie(item)
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
    endOfImageUrl (review) {
      let end = review.author_details.avatar_path.split('/')
      end = end[end.length - 1]
      return '/' + end
    },
    getReviewDateAndTime (dateAndTime) {
      let date = new Date(dateAndTime)
      date = date.toString().split(' ')
      MONTHS.forEach(month => {
        if (month.eng === date[1]) {
          date.splice(1, 1, month.rus)
        }
      })
      const time = date[4].split(':')
      date = `${date[2]} ${date[1]} ${date[3]} ${time[0]}:${time[1]}`
      return date
    },
    ...mapActions('main', ['getMovieDetails', 'getMovieActors', 'getSimilarMovies', 'getMovieReviews']),
    ...mapMutations('main', ['SET_MOVIE', 'SET_ACTORS_LIST', 'SET_SIMILAR_MOVIES_LIST', 'SET_MOVIE_REVIEWS_LIST',
      'SET_SEARCH_MOVIE_LIST'])
  },
  async mounted () {
    if (this.$route.params.id) {
      await loadInfoAboutMovie(this.$route.params.id)
    }
  }
}
</script>

<style scoped>
.slider {
  max-width: 100%;
  width: 100%;
}
.slider-card {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>

<style module lang="scss">
.movie {
  padding: 20px;
  color: white;
  line-height: 1.5;
  .movieTitle {
    font-size: 30px;
  }
  .moviePoster {
    width: 30%;
    img {
      width: 90%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .movieOverviewWrapper {
    width: 75%;
    text-align: justify;
    padding: 15px;
    border-radius: 5px;
  }
  .movieDescription {
    margin-left: 1.3%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: justify;
    span {
      color: darkgray;
    }
  }
  .posterCard {
    margin: 10px;
    width: 80%;
    height: 100%;
    border: none;
    .similarMovieTitle:hover {
      color: #42b983;
    }
    img {
      width: 100%;
    }
  }
  .reviewBlock {
    display: flex;
    justify-content: space-around;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    img {
      width: 100%;
    }
  }
}
</style>
