<template>
  <ul>
    <li class="element" v-for="rota in rotas" :key="rota.name">
      <router-link class="link" :to="rota.path ? rota.path : '/'">{{rota.name}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Link',
  props: {
    rotas: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/utils/variables-style.scss";

ul {
  margin-top: 30px;
}
li {
  padding: 8px 22px;
}
.link {
  color: $color-white;
  font-weight: 400;
  font-size: 1.4em;
  text-decoration: none;
}
</style>
