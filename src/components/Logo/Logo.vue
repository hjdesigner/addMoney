<template>
  <div class="container">
    <p class="logo">Logotipo</p>
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style scoped lang="scss">
@import "@/utils/variables-style.scss";

.container {
  align-items: center;
  background-color: rgba(255, 255, 255, .6);
  border-radius: 17px;
  display: flex;
  height: 42px;
  justify-content: center;
  width: 93px;
}
.logo {
  color: $color-green;
  font-style: normal;
  font-weight: 900;
  font-size: 1.4em;
  text-transform: uppercase;
}
</style>
