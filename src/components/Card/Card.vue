<template>
  <section class="container">
    <ul>
      <li v-for="item of clients.data" :key="item.id" class="card">
        <div class="bar">
          <BarAddedValue :value="item.money" />
        </div>
        <div class="icon">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.0973 11.9693C29.0253 11.9693 30.5883 13.5323 30.5883 15.4604C30.5883 16.1031 30.0674 16.6241 29.4246 16.6241C28.7819 16.6241 28.2609 16.1031 28.2609 15.4604C28.2609 14.8177 27.74 14.2967 27.0973 14.2967H22.4425V20.2696L27.591 21.0051C29.3108 21.2508 30.5883 22.7237 30.5883 24.461V27.0973C30.5883 29.0253 29.0253 30.5883 27.0973 30.5883H22.4425V32.9157C22.4425 33.5584 21.9216 34.0794 21.2788 34.0794C20.6361 34.0794 20.1151 33.5584 20.1151 32.9157V30.5883H15.4604C13.5324 30.5883 11.9693 29.0253 11.9693 27.0973C11.9693 26.4546 12.4903 25.9336 13.133 25.9336C13.7758 25.9336 14.2967 26.4546 14.2967 27.0973C14.2967 27.7399 14.8177 28.2609 15.4604 28.2609H20.1151V22.2881L14.9667 21.5526C13.2468 21.3069 11.9693 19.8339 11.9693 18.0966V15.4604C11.9693 13.5323 13.5324 11.9693 15.4604 11.9693H20.1151V9.64197C20.1151 8.99929 20.6361 8.47828 21.2788 8.47828C21.9216 8.47828 22.4425 8.99929 22.4425 9.64197V11.9693H27.0973ZM20.1151 14.2967H15.4604C14.8177 14.2967 14.2967 14.8177 14.2967 15.4604V18.0966C14.2967 18.6757 14.7225 19.1667 15.2958 19.2486L20.1151 19.9371V14.2967ZM22.4425 22.6206V28.2609H27.0973C27.74 28.2609 28.2609 27.7399 28.2609 27.0973V24.461C28.2609 23.8819 27.8351 23.3909 27.2619 23.309L22.4425 22.6206Z" fill="#059D42"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0001 0C16.8467 0 12.7864 1.23163 9.33303 3.53913C5.87964 5.84666 3.18797 9.1264 1.59861 12.9636C0.00909827 16.8009 -0.406828 21.0233 0.403596 25.0969C1.21386 29.1705 3.21394 32.9123 6.15075 35.8492C9.08773 38.7861 12.8294 40.7862 16.9032 41.5965C20.9767 42.4068 25.1991 41.9909 29.0363 40.4015C32.8736 38.812 36.1533 36.1204 38.4609 32.667C40.7685 29.2135 42 25.1534 42 21C41.9955 15.4319 39.7814 10.0931 35.8442 6.15584C31.9069 2.21858 26.5682 0.00460653 21.0001 0ZM21.0001 39.1397C17.4123 39.1397 13.9051 38.0758 10.9221 36.0826C7.93898 34.0894 5.61404 31.2564 4.2411 27.9418C2.86815 24.6272 2.50888 20.9799 3.20891 17.4611C3.90878 13.9424 5.63645 10.7102 8.17324 8.17328C10.7102 5.63638 13.9423 3.90875 17.4611 3.20882C20.98 2.50889 24.6272 2.86812 27.9418 4.24107C31.2564 5.61402 34.0894 7.93903 36.0827 10.9221C38.0758 13.9052 39.1398 17.4123 39.1398 21C39.1374 25.8102 37.2254 30.4227 33.8242 33.8241C30.4227 37.2254 25.8102 39.1373 21.0001 39.1397Z" fill="#059D42"/></svg>
        </div>
        <div class="info">
          <h2>{{ item.employee_name }}</h2>
          <p>Ao clicar no link abaixo, uma dialog irá aparecer perguntando
          quantos reais você deseja adicionar a barra de progresso. A barra deve começar em 0.</p>

          <div class="progress">
            <p>Total R$ 200.00</p>
            <ProgressBar :value="item.money" />
          </div>
          <div class="open-modal">
            <button @click="openModal(item.id, item.employee_name)">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.67742 0.822581C7.67742 0.368282 8.0457 0 8.5 0C8.9543 0 9.32258 0.368282 9.32258 0.822581V16.1774C9.32258 16.6317 8.9543 17 8.5 17C8.0457 17 7.67742 16.6317 7.67742 16.1774V0.822581Z" fill="#059D42"/><path d="M0.822581 9.32258C0.368282 9.32258 1.9858e-08 8.9543 0 8.5C-1.9858e-08 8.0457 0.368282 7.67742 0.822581 7.67742L16.1774 7.67742C16.6317 7.67742 17 8.0457 17 8.5C17 8.9543 16.6317 9.32258 16.1774 9.32258L0.822581 9.32258Z" fill="#059D42"/></svg>
              Clique aqui para adicionar reais
            </button>
          </div>
        </div>

      </li>
    </ul>
  </section>
</template>

<script>
import BarAddedValue from '@/components/BarAddedValue/BarAddedValue.vue';
import ProgressBar from '@/components/ProgressBar/ProgressBar.vue';
import { mapState } from 'vuex';

export default {
  name: 'Card',
  components: {
    BarAddedValue,
    ProgressBar,
  },
  methods: {
    openModal(id, name) {
      this.$store.commit('openModal', { visible: true, name, id });
    },
    formatValue(value) {
      if (value > 0) {
        const number = value.toFixed(2).split('.');
        number[0] = number[0].split(/(?=(?:...)*$)/).join('.');
        return number.join(',');
      }
      return '';
    },
  },
  computed: {
    ...mapState({
      clients: 'clients',
      money: 'money',
    }),
  },
};
</script>

<style scoped lang="scss">
@import "@/utils/variables-style.scss";
@import "@/utils/mixin-style.scss";

.container {
  margin-top: 49px;
  max-width: 905px;

  @include desktop {
    margin-top: 66px;
  }
}
ul {
  list-style: none;
}
.card {
  background-color: $color-white;
  box-shadow: $shadow;
  margin-bottom: 46px;
  padding: 21px 24px;
  position: relative;
  width: 100%;

  @include desktop {
    display: flex;
  }
}
.bar {
  right: -9px;
  position: absolute;
  top: -9px;
}
.icon {
  display: none;
  margin: 18px 24px 0 0;

  @include desktop {
    display: flex;
  }
}
.info {
  margin-top: 18px;

  h2 {
    color: $color-green;
    font-style: normal;
    font-weight: bold;
    font-size: 1.6em;
  }
  p {
    color: $color-grey-dark;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2em;
    line-height: 1.7;
    margin-top: 26px;

    @include desktop {
      margin-top: 10px;
    }
  }
}
.progress {
  margin-top: 22px;

  @include desktop {
    margin-top: 12px;
  }

  p {
    color: $color-gray;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 1.2;
    margin: 0;
    text-align: right;
  }

  &-bar {
    background-color: $color-gray-light;
    border-radius: 22px;
    height: 22px;
    margin-top: 9px;
    position: relative;
    width: 95%;

    @include desktop {
      margin-top: 0px;
      width: 98%;
    }
  }
  &-bar-value {
    background-color: $color-green;
    border-radius: 22px;
    height: 22px;
    text-align: right;
    width: 40%;

    &:after {
      border-left: 1px dotted $color-grey-dark;
      content: "";
      height: 100%;
      position: absolute;
      right: 7px;
      top: 0;
      width: 1px;
    }
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
.open-modal {
  margin-top: 26px;

  button {
    align-items: center;
    background-color: transparent;
    border: 0;
    color: $color-green;
    cursor: pointer;
    display: flex;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2em;
    line-height: 1.7;
    transition: all ease-in-out .2s;

    svg {
      margin-right: 9px;
    }

    &:hover {
      color: $color-black;

      svg,
      path {
        fill: $color-black;
      }
    }
  }
}
</style>
