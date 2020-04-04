<template>
  <ul class="list-value-add">
    <li>
      <button @click="addMoney(modal.id, 25)">R$ 25</button>
    </li>
    <li>
      <button @click="addMoney(modal.id, 50)">R$ 50</button>
    </li>
    <li>
      <button @click="addMoney(modal.id, 75)">R$ 75</button>
    </li>
    <li>
      <button @click="addMoney(modal.id, 125)">R$ 125</button>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ButtonValueAdd',
  methods: {
    addMoney(id, value) {
      this.$store.commit('addMoney', { employee: id, value });
    },
  },
  computed: {
    ...mapState({
      modal: 'modal',
    }),
  },
};
</script>

<style scoped lang="scss">
@import "@/utils/variables-style.scss";
@import "@/utils/mixin-style.scss";

.list-value-add {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;

  li {
    margin-bottom: 36px;
    width: 48%;
  }
  button {
    align-items: center;
    background-color: $color-blue-light;
    border: 0;
    color: $color-green;
    cursor: pointer;
    display: flex;
    font-style: normal;
    font-weight: 900;
    font-size: 2.6em;
    line-height: 3.6;
    height: 100%;
    justify-content: center;
    transition: all ease-in-out .2s;
    width: 100%;

    &:hover {
      background-color: $color-blue-dark;
      color: $color-white;
    }
  }
}
</style>
