<template>
  <div class="form-group">
    <label :form="name">{{ text }}</label>
    <input
      :type="type"
      :id="name"
      :placeholder="placeholder"
      autocomplete="off"
      :value="value"
      @input="$emit('update', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    text: {
      required: true,
      default: 'text',
      type: String,
    },
    name: {
      required: true,
      default: 'name',
      type: String,
    },
    type: {
      required: true,
      default: 'text',
      type: String,
    },
    value: {
      required: true,
      default: '',
      type: String,
    },
    placeholder: {
      required: true,
      default: '',
      type: String,
    },
  },
  model: {
    prop: 'value',
    event: 'update',
  },
};
</script>

<style scoped lang="scss">
@import "@/utils/variables-style.scss";

.form-group {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 22px;
  width: 100%;

  label {
    color: $color-black;
    font-size: 1.4em;
    margin-bottom: 8px;
    width: 100%;
  }
  input {
    border: 1px solid $color-gray-light;
    color: $color-black;
    font-size: 1.4em;
    padding: 18px;
    width: 100%;
  }
}
</style>
