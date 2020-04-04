<template>
  <div id="app">
    <Warning text="Carregando..." v-if="isLoading" />
    <Warning text="Houve um erro, tente novamente mais tarde." v-if="isError" />
    <HeaderMobile />
    <NavDesktop />
    <router-view />
  </div>
</template>

<script>
import HeaderMobile from '@/components/HeaderMobile/HeaderMobile.vue';
import NavDesktop from '@/components/NavDesktop/NavDesktop.vue';
import Warning from '@/components/Warning/Warning.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    HeaderMobile,
    NavDesktop,
    Warning,
  },
  computed: {
    ...mapState({
      isLoading: 'loader',
      isError: 'error',
    }),
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap');
@import "@/utils/mixin-style.scss";

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
}
#app {
  @include desktop {
    display: flex;
    height: 100%;
  }
}
</style>
