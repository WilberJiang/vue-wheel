<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text" :disabled="disabled" />
    <template v-if="error">
      <g-icon name="tijiaoshibai" class="error-icon"></g-icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f14530;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  :not(:last-child) {
    margin-right: 0.5em;
  }
  input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    input {
      border-color: $red;
    }
  }
  .error-icon {
    fill: $red;
  }
  .error-message {
    color: $red;
  }
}
</style>