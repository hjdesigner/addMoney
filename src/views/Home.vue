<template>
  <main class="home">
    <Title type="large" text="Pessoas que vão ganhar dinheiro" />
    <Card />
  </main>
</template>

<script>
import Title from '@/components/Title/Title.vue';
import Card from '@/components/Card/Card.vue';

export default {
  name: 'Home',
  components: {
    Title,
    Card,
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
}
</style>
