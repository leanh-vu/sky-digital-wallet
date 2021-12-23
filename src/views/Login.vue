<template>
  <div class="login-wrapper d-flex flex-column justify-center align-center">
    <div class="login-container d-flex flex-column justify-space-around align-center">
      <div class="wallpaper-container d-flex justify-center align-center">
        <img src="../assets/login-wall.png" alt="">
      </div>
      <div class="login-title">
        Ronin Wallet
      </div>
      <div class="login-subtitle">
        Your Digital Passport
      </div>
      <BaseInput :input="userPassword" title="enter password" type="password" password-visible-button input-placeholder="password" @update="setInput"/>
      <BaseButton @clicked="login" class="login-button" text="Unlock" textColor="white"/>
    </div>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput";
import BaseButton from "../components/BaseButton";

export default {
  name: "Login",
  components: {
    BaseButton,
    BaseInput
  },
  data: () => ({
    userPassword: '',
  }),
  methods: {
    async login() {
      await this.saveToken(this.userPassword)
      await this.$router.push({
        name: "Home"
      })
    },
    setInput(e) {
      console.log('aasd')
      this.userPassword = e
    }
  }
}
</script>

<style lang="scss" scoped>
$element-spacing: 20px;

.login-wrapper {
  padding: 0 20px;

  .login-container {
    width: 100%;
    height: 100%;
    margin-top: 60px;

    .wallpaper-container {
      margin-bottom: $element-spacing;
    }
    .login {
      &-title {
        font-weight: bold;
        font-size: 32px;
        line-height: 40px;
        margin-bottom: $element-spacing - 10px;
      }

      &-subtitle {
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: $element-spacing + 10px;
      }
      &-button {
        margin-top: 20px;
      }
    }

  }
}
</style>
