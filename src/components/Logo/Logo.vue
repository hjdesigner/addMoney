<template>
  <div class="container" :class="styleLogo">
    <p class="logo" :class="styleLogo">Logotipo</p>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    type: {
      required: false,
      default: 'mobile',
      type: String,
    },
  },
  computed: {
    styleLogo() {
      if (this.type === 'desktop') return 'logo-desktop';

      return 'logo-mobile';
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/utils/variables-style.scss";

.container {
  align-items: center;
  background-color: rgba(255, 255, 255, .6);
  display: flex;
  justify-content: center;

  &.logo-mobile {
    border-radius: 17px;
    height: 42px;
    width: 93px;
  }
  &.logo-desktop {
    border-radius: 34px;
    height: 84px;
    width: 183px;
  }
}
.logo {
  color: $color-green;
  font-style: normal;
  font-weight: 900;
  text-transform: uppercase;

  &.logo-mobile {
    font-size: 1.4em;
  }
  &.logo-desktop {
    font-size: 2.8em;
  }
}
</style>
