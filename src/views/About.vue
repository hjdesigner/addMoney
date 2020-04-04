<template>
  <main class="home">
    <Title type="large" text="About" />

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
     culpa qui officia deserunt mollit anim id est laborum.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
     culpa qui officia deserunt mollit anim id est laborum.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
     culpa qui officia deserunt mollit anim id est laborum.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
     culpa qui officia deserunt mollit anim id est laborum.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
     culpa qui officia deserunt mollit anim id est laborum.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
     culpa qui officia deserunt mollit anim id est laborum.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
     culpa qui officia deserunt mollit anim id est laborum.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
     culpa qui officia deserunt mollit anim id est laborum.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
     culpa qui officia deserunt mollit anim id est laborum.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
     culpa qui officia deserunt mollit anim id est laborum.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
     culpa qui officia deserunt mollit anim id est laborum.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
     nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
     culpa qui officia deserunt mollit anim id est laborum.</p>
  </main>
</template>

<script>
import Title from '@/components/Title/Title.vue';

export default {
  name: 'About',
  components: {
    Title,
  },
  created() {
    this.$store.commit('closeLoader');
  },
};
</script>

<style scoped lang="scss">
@import "@/utils/mixin-style.scss";

main {
  padding: 28px 22px;

  @include desktop {
    padding: 28px 127px;
  }

  p {
    font-size: 1.8em;
    margin-top: 22px;
  }
}
</style>
