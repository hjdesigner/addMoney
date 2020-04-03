<template>
  <Nav>
    <div class="logo-desktop">
      <Logo type="desktop" />
    </div>
    <Links :rotas="routes" />
  </Nav>
</template>

<script>
import { routes } from '@/router';
import Logo from '@/components/Logo/Logo.vue';
import Links from '@/components/Links/Links.vue';

export default {
  name: 'NavDesktop',
  components: {
    Logo,
    Links,
  },
  data() {
    return {
      routes,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/utils/variables-style.scss";
@import "@/utils/mixin-style.scss";

.logo-desktop {
  display: flex;
  justify-content: center;
  margin: 29px 0;
}
nav {
  background-color: $color-green;
  display: none;
  width: 228px;

  @include desktop {
    display: block;
  }
}
</style>
