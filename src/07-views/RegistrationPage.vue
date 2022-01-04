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
        <el-form-item>
          <el-input
            v-model="registrationData.login"
            placeholder="Login"
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="registrationData.firstName"
            placeholder="First name"
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="registrationData.lastName"
            placeholder="Last name"
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="registrationData.email"
            placeholder="E-mail"
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="registrationData.password"
            placeholder="Password"
            clearable
            show-password
          />
        </el-form-item>
        <el-form-item>
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
        @click="onSubmit"
      >
        Register
      </el-button>
    </el-card>
  </div>
</template>

<script>
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
    :global(.el-input) {
      margin-bottom: 20px;
    }
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
    .registrationForm {
      :global(.el-link:hover) {
        text-decoration: underline;
      }
    }
  }
}
</style>
