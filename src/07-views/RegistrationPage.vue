<template>
  <div :class="$style.registrationPage">
    <el-card :class="$style.boxCard">
      <div
        slot="header"
        :class="$style.clearfix"
      >
        <span>REGISTRATION</span>
      </div>
      <el-form
        ref="loginForm"
        label-position="top"
        :model="registrationData"
        :rules="rules"
        :class="$style.registrationForm"
      >
        <el-form-item
          label="Login"
        >
          <el-input
            v-model="registrationData.login"
            placeholder="Login"
            clearable
          />
        </el-form-item>
        <el-form-item
          label="First name"
        >
          <el-input
            v-model="registrationData.firstName"
            placeholder="First name"
            clearable
          />
        </el-form-item>
        <el-form-item
          label="Last name"
        >
          <el-input
            v-model="registrationData.lastName"
            placeholder="Last name"
            clearable
          />
        </el-form-item>
        <el-form-item
          label="E-mail"
        >
          <el-input
            v-model="registrationData.email"
            placeholder="E-mail"
            clearable
          />
        </el-form-item>
        <el-form-item
          label="Password"
        >
          <el-input
            v-model="registrationData.password"
            placeholder="Password"
            clearable
            show-password
          />
        </el-form-item>
        <el-form-item
          label="Confirm password"
        >
          <el-input
            v-model="registrationData.confirmPassword"
            placeholder="Password (confirm)"
            clearable
            show-password
          />
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        :class="$style.registerButton"
        @click="onSubmit"
      >
        Register
      </el-button>
    </el-card>
  </div>
</template>

<script>
import lodash from 'lodash'

const DEFAULT_REGISTRATION_DATA = {
  login: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
export default {
  name: 'LoginPage',
  data () {
    return {
      registrationData: {
        login: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      rules: {}
    }
  },
  methods: {
    onSubmit () {
      console.log(this.registrationData)
      this.registrationData = lodash.cloneDeep(DEFAULT_REGISTRATION_DATA)
    }
  }
}
</script>

<style module lang="scss">
.registrationPage {
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
    .registrationForm {
      text-align: left;
      :global(.el-form-item__label) {
        padding: 0;
      }
      :global(.el-link:hover) {
        text-decoration: underline;
      }
    }
    .registerButton {
      margin-top: 20px;
    }
  }
}
</style>
