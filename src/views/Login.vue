<template>
  <div class="login-wrapper">
    <div class="login-container">
      <div class="wall-paper-container">
        <img src="../assets/login-wall.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  padding: 20px;
  .login-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .wall-paper-container {
      display: flex;
      justify-content: center;
      align-items: center;
      //width: ;
      //img {
      //
      //}
    }
  }
}
</style>
