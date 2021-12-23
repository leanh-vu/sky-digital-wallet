<template>
  <div>
      this is home
      to back to login: <BaseButton text="To Login" @clicked="toLogin"></BaseButton>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue"

export default {
  name: 'Home',
  components: {
    BaseButton
  },
  methods: {
    toLogin() {
      localStorage.removeItem('token')
      this.$router.push({
        name: "Login"
      })
    }
  }
}
</script>
