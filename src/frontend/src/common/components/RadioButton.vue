<template>
  <input
    type="radio"
    :name="name"
    :value="value"
    :class="className"
    :checked="checked"
    @click="onClick(name, value)"
  />
</template>
<script>
export default {
  name: "RadioButton",
  props: {
    name: {
      type: String,
      required: true,
      validator: (v) => v.length,
    },
    value: {
      type: Object,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: "",
    },
  },
  methods: {
    onClick(name, value) {
      this.$emit("setOption", { option: name, value });
    },
  },
};
</script>
