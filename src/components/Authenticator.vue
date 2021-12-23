<template>
  <div>
    <slot/>
  </div>
</template>

<script>
// import {service} from "@/services";

export default {
  name: 'Authenticator',
  data: () => ({
    home: 'Home',
    login: 'Login'
  }),
  watch: {
    $route(route) {
      console.log(route)
      if (route) {
        this.checkLogin(route);
      }
    },
  },
  methods: {
    checkLogin(route) {
      if (route.name === this.login) {
        if (this.getToken() !== 0) {
          this.$router.push({
            name: this.home
          })
        }
      } else {
        if (this.getToken() === 0) {
          this.$router.push({
            name: this.login
          })
        }
      }
    }
  }
  ,
  created() {
    this.checkLogin(this.$route)
  }
}
</script>
