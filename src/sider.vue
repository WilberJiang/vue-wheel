<template>
  <transition name="sider">
    <div class="sider" v-if="visible">
      <slot></slot>
      <g-button @click="visible=false">close</g-button>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: true
    };
  },
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.sider-enter-active,
.sider-leave-active {
  transition: all 0.5s;
}
.sider-enter,
.sider-leave-to {
  margin-left: -200px;
}
</style>