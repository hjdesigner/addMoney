<template>
  <transition name="transition">
    <div v-show="modal.visible">
      <div class="overlay"></div>
      <div class="modal">
        <div class="modal-header">
          <h3>Quantos reais adicionar <span>para {{ modal.name }}</span>?</h3>
          <button @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z"/></svg>
          </button>
        </div>
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Modal',
  methods: {
    ...mapMutations([
      'closeModal',
    ]),
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

.overlay {
  background-color: rgba(0, 0, 0, .8);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
.modal {
  background-color: $color-white;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 20;

  @include desktop {
    height: 390px;
    left: calc(50% - 300px);
    top: calc(50% - 195px);
    width: 600px;
  }

  &-header {
    align-items: center;
    background-color: $color-green;
    display: flex;
    height: 42px;
    justify-content: space-between;
    padding: 0 12px;
    width: 100%;

    @include desktop {
      height: 38px;
    }

    h3 {
      color: $color-white;
      font-style: normal;
      font-weight: bold;
      font-size: 1.8em;
      line-height: 2.5;

      span {
        display: none;

        @include desktop {
          display: inline-block;
        }
      }
    }
    button {
      background-color: transparent;
      border: 0;
      cursor: pointer;

      svg {
        fill: $color-white;
        transform: rotate(45deg);
      }
    }
  }
  &-content {
    padding: 52px 19px;

    @include desktop {
      padding: 34px 77px;
    }
  }
}
.transition-enter, .transition-leave-active {
  opacity: 0;
}
.transition-enter-active, .transition-leave-active {
  transition: opacity .4s
}
</style>
