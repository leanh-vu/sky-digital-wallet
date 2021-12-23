<template>
  <button @click="clicked" class="base-button"
          :style="{background: color, color: textColor, width: width}">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: String,
    color: {
      type: String,
      default: 'linear-gradient(256.28deg, #1C94F4 0%, #1273EA 100%)'
    },
    textColor: {
      type: String,
      default: 'black'
    },
    width: {
      type: String,
      default: 'fit-content'
    }
  },
  methods: {
    clicked() {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  border-radius: 8px;
  padding: 10px 20px;

  &-text {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-transform: none;
  }
}
</style>
