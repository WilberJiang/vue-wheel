<template>
  <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  },
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  computed: {
    classes() {
      return { active: this.active, disabled: this.disabled };
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = name === this.name;
    });
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.eventBus.$emit("update:selected", this.name, this);
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: blue;
$disabled-text-color: grey;
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: border;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>