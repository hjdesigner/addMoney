<template>
  <main>
    <Title type="large" text="Cadastro de funcionário" />

    <form @submit.prevent="addEmployee()">
      <Input
        text="Nome"
        name="name"
        type="text"
        placeholder="Nome do funcionário"
        v-model="employee.name"
      />
      <div class="form-group">
        <label form="salary">Salário</label>
        <currency-input
          id="salary"
          v-model="employee.salary"
          currency="BRL"
          :value-range="{min: 1, max: 2500000000000000}"
        />
      </div>
      <Input
        text="Idade"
        name="age"
        type="number"
        placeholder="Idade do funcionário"
        v-model="employee.age"
      />
      <Input
        text="Foto"
        name="photograph"
        type="text"
        placeholder="URL da imagem"
        v-model="employee.image"
      />
      <div class="photograph">
        <img :src="employee.image" />
      </div>
      <div class="form-butons">
        <p v-show="success" class="success">Funcionário cadastrado com sucesso</p>
        <p v-show="error" class="error">Houve um erro, tente novamete mais tarde</p>
        <button
          :disabled="
            employee.name === '' ||
            employee.salary <= 0 ||
            employee.age === ''
          "
        >Cadastrar</button>
      </div>
    </form>
  </main>
</template>

<script>
import axios from 'axios';
import Title from '@/components/Title/Title.vue';
import Input from '@/components/Input/Input.vue';
import { CurrencyInput } from 'vue-currency-input';

export default {
  name: 'Register',
  components: {
    Title,
    CurrencyInput,
    Input,
  },
  data() {
    return {
      employee: {
        name: '',
        salary: 0,
        age: '',
        image: '',
      },
      success: false,
      error: false,
    };
  },
  methods: {
    addEmployee() {
      axios.post('http://dummy.restapiexample.com/api/v1/create', {
        name: this.employee.name,
        salary: this.employee.salary,
        age: this.employee.age,
        image: this.employee.image,
      })
        .then(() => {
          this.success = true;
          this.error = false;
          this.employee = {
            name: '',
            salary: 0,
            age: '',
            image: '',
          };
        })
        .catch(() => {
          this.success = false;
          this.error = true;
        });
    },
  },
  created() {
    this.$store.commit('closeLoader');
  },
};
</script>

<style scoped lang="scss">
@import "@/utils/variables-style.scss";
@import "@/utils/mixin-style.scss";

main {
  padding: 28px 22px;
  width: 100%;

  @include desktop {
    padding: 28px 127px;
    max-width: 1000px;
  }

  p {
    font-size: 1.8em;
    margin-top: 22px;
  }
}
form {
  background-color: $color-white;
  box-shadow: $shadow;
  margin: 46px 0;
  padding: 21px 24px;
  position: relative;
  width: 100%;
}
.form-group {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 22px;

  label {
    color: $color-black;
    font-size: 1.4em;
    margin-bottom: 8px;
    width: 100%;
  }
  input {
    border: 1px solid $color-gray-light;
    color: $color-black;
    font-size: 1.4em;
    padding: 18px;
    width: 100%;
  }
}
.message-error {
  color: $color-red;
  font-size: 1.2em;
  margin-bottom: 8px;
}
.photograph {
  border: 1px solid $color-gray;
  height: 150px;
  width: 150px;

  img {
    width: 100%;
  }
}
.form-butons {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: 22px;

  p {
    margin: 0 18px 0 0;

    &.success {
      color: $color-green;
    }
    &.error {
      color: $color-red;
    }
  }
  button {
    background-color: $color-green;
    border: 0;
    color: $color-white;
    cursor: pointer;
    font-size: 1.4em;
    padding: 8px 18px;
    transition: all ease-in-out .2s;

    &:hover {
      background-color: $color-blue-dark;
      color: $color-white;
    }
    &[disabled] {
      cursor: default;
      opacity: .5;

      &:hover {
        background-color: $color-green;
      }
    }
  }
}
.validation {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
