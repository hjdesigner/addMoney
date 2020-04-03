<template>
  <div v-switch="size">
    <h1 class="title title-large" v-case="'large'">{{ text }}</h1>
    <h2 class="title title-medium" v-case="'medium'">{{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    type: {
      required: false,
      default: 'medium',
      type: String,
    },
    text: {
      required: true,
      default: '',
      type: String,
    },
  },
  data() {
    return {
      size: this.type,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/utils/variables-style.scss";

.title {
  color: $color-grey-dark;
  font-style: normal;
  font-weight: 900;

  &-large {
    font-size: 2.8em;
  }
  &-medium {
    font-size: 1.6em;
  }
}

</style>
