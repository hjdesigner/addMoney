<template>
  <div class="progress-bar">
    <p class="progress-value-default">R$ 0.00</p>
    <transition name="progress">
      <div
        class="progress-bar-value"
        role="progressbar"
        :aria-valuenow="value"
        aria-valuemin="0"
        aria-valuemax="200"
        :style="widthStyle">
        <p>R$ {{ formatValue(value) }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    value: {
      required: true,
      default: 0,
      type: Number,
    },
  },
  methods: {
    formatValue(value) {
      if (value > 0) {
        const number = value.toFixed(2).split('.');
        number[0] = number[0].split(/(?=(?:...)*$)/).join('.');
        return number.join(',');
      }
      return 0;
    },
  },
  computed: {
    widthStyle() {
      if (this.value >= 200) {
        return {
          width: '100%',
        };
      }
      return {
        width: `${(this.value / 200) * 100}%`,
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/utils/variables-style.scss";
@import "@/utils/mixin-style.scss";

.progress {
  &-value-default {
    color: $color-grey-dark;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 1.2;
    padding-left: 8px;
  }
  &-bar {
    align-items: center;
    background-color: $color-gray-light;
    border-radius: 22px;
    display: flex;
    height: 22px;
    margin-top: 9px;
    position: relative;
    width: 95%;

    &:after {
      border-left: 1px dotted $color-grey-dark;
      content: "";
      height: 100%;
      position: absolute;
      right: 7px;
      top: 0;
      width: 1px;
    }

    @include desktop {
      margin-top: 0px;
      width: 98%;
    }
  }
  &-bar-value {
    background-color: $color-green;
    border-radius: 22px;
    height: 22px;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    text-align: right;
    width: 0;

    p {
      align-items: center;
      color: $color-white;
      display: flex;
      font-style: normal;
      font-weight: normal;
      font-size: 1em;
      height: 100%;
      justify-content: flex-end;
      line-height: 1.2;
      padding-right: 9px;
    }
  }
}
.progress-enter-active, .progress-leave-active {
  transition: width .3s
}
.progress-enter, .progress-leave-active {
  width: 0
}
</style>
