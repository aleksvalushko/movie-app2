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
      <el-autocomplete
        v-model="searchResult"
        popper-class="my-autocomplete"
        :fetch-suggestions="querySearch"
        placeholder="Search movie"
        size="small"
        @select="handleSelect"
      >
        <i
          slot="suffix"
          class="el-icon-search el-input__icon"
          @click="handleIconClick"
        >
        </i>
        <template slot-scope="{ item }">
          <div class="value">
            {{ item.value }}
          </div>
          <span class="link">
            {{ item.link }}
          </span>
        </template>
      </el-autocomplete>
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
export default {
  name: 'TheHeader',
  data () {
    return {
      searchResult: ''
    }
  },
  methods: {
    handleSelect () {},
    querySearch () {},
    handleIconClick () {}
  }
}
</script>

<style module lang="scss">
.theHeader {
  width: 100%;
  height: 8vh;
  background: #42b983;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .logo {
    width: 10%;
    img {
      width: 80%;
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
