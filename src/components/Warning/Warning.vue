<template>
  <div class="warning">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Warning',
  props: {
    text: {
      required: true,
      default: 'Carregando...',
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/utils/variables-style.scss";

.warning {
  align-items: center;
  background-color: $color-white;
  color: $color-black;
  display: flex;
  font-size: 2.8em;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 40;
}
</style>
