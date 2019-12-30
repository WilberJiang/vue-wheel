<template>
  <svg class="g-icon">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
export default {
    props:['name']
};
</script>

<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
}
</style>