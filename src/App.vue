<template>
  <div id="app">
    <HeaderMobile />
    <router-view/>
  </div>
</template>

<script>
import HeaderMobile from '@/components/HeaderMobile/HeaderMobile.vue';

export default {
  name: 'App',
  components: {
    HeaderMobile,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
}
</style>
