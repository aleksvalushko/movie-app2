<template>
  <div :class="$style.loginPage">
    <el-card :class="$style.boxCard">
      <div
        slot="header"
        :class="$style.clearfix"
      >
        <span>LOG IN</span>
      </div>
      <el-form
        ref="loginForm"
        label-position="top"
        :model="loginData"
        :rules="rules"
        :class="$style.loginForm"
      >
        <el-form-item
          label="Login"
        >
          <el-input
            v-model="loginData.login"
            placeholder="Login"
            clearable
          />
        </el-form-item>
        <el-form-item
          label="Password"
        >
          <el-input
            v-model="loginData.password"
            placeholder="Password"
            clearable
            show-password
          />
        </el-form-item>
        <div style="display: flex; justify-content: space-between;">
          <el-form-item>
            <el-checkbox v-model="loginData.isRememberUser">
              Remember me
            </el-checkbox>
          </el-form-item>
          <el-link
            type="primary"
            :underline="false"
          >
            Forgot password?
          </el-link>
        </div>
      </el-form>
      <el-button
        type="primary"
        @click="onSubmit"
      >
        Sign In
      </el-button>
      <div :class="$style.signUpButton">
        <span style="margin-right: 3px;">Are you new?</span>
        <router-link to="/registration">
          Sign up
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
import lodash from 'lodash'
import { mapActions } from 'vuex'

const DEFAULT_LOGIN_DATA = {
  login: '',
  password: '',
  isRememberUser: false
}
export default {
  name: 'LoginPage',
  data () {
    return {
      loginData: {
        login: '',
        password: '',
        isRememberUser: false
      },
      rules: {}
    }
  },
  methods: {
    async onSubmit () {
      await this.newToken()
      this.loginData = lodash.cloneDeep(DEFAULT_LOGIN_DATA)
    },
    ...mapActions('main', ['newToken'])
  }
}
</script>

<style module lang="scss">
.loginPage {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .boxCard {
    width: 40%;
    min-height: 40%;
    :global(.el-form-item) {
      margin-bottom: 0;
    }
    :global(.el-button) {
      margin-bottom: 10px;
      width: 35%;
    }
    .signUpButton {
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        color: #409EFF;
      }
      a:hover {
        text-decoration: underline;
      }
    }
    .loginForm {
      text-align: left;
      :global(.el-link:hover) {
        text-decoration: underline;
      }
      :global(.el-form-item__label) {
        padding: 0;
      }
    }
  }
}
</style>
