import BarAddedValue from './BarAddedValue.vue';
import '@/utils/storybook-style.scss';

export default {
  title: 'BarAddedValue',
  component: BarAddedValue,
};

export const Default = () => ({
  components: { BarAddedValue },
  template: '<div><BarAddedValue :value="0" /></div>',
});

export const ComValor = () => ({
  components: { BarAddedValue },
  template: '<div><BarAddedValue :value="10.50" /></div>',
});

export const OutroValor = () => ({
  components: { BarAddedValue },
  template: '<div><BarAddedValue :value="250" /></div>',
});
