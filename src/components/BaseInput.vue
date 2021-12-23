<template>
  <div class="base-input-container d-flex flex-column justify-center align-start">
    <div class="base-input-title">{{ title }}</div>
    <div class="base-input-inner">
      <input v-model="input" :placeholder="inputPlaceholder" :type="inputType" @input="update">
      <div class="visible-button" @click="togglePasswordVisibility">
        <img src="../assets/eye.png" alt="visible">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    inputType: {
      type: String,
      default: 'text'
    },
    title: String,
    passwordVisibleButton: {
      type: Boolean,
      default: false
    },
    inputPlaceholder: String,
  },
  data: () => ({
    input: null
  }),
  methods: {
    togglePasswordVisibility() {

    },
    update() {
      this.$emit('update', this.input)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-input-container {
  width: 100%;

  .base-input {
    &-title {
      margin-left: 10px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 10px;
      line-height: 16px;
      margin-bottom: 10px;
      color: #57627B;
    }

    &-inner {
      position: relative;
      width: 100%;
      background: #FFFFFF;
      border: 1px solid #C5CEE0;
      box-sizing: border-box;
      border-radius: 8px;
      padding: 10px;

      input {
        width: 100%;

        &:focus {
          outline: none;
        }
      }

      .visible-button {
        position: absolute;
        right: 10px;
        top: 20%;
      }
    }
  }
}
</style>
