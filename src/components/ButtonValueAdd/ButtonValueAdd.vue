<template>
  <ul class="list-value-add">
    <li>
      <button>R$ 25</button>
    </li>
    <li>
      <button>R$ 50</button>
    </li>
    <li>
      <button>R$ 75</button>
    </li>
    <li>
      <button>R$ 125</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ButtonValueAdd',
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
    max-width: 212px;
    width: 100%;
  }
}
</style>
