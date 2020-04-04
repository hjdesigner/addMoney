import ProgressBar from './ProgressBar.vue';
import '@/utils/storybook-style.scss';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
};

export const SemValor = () => ({
  components: { ProgressBar },
  template: '<div><ProgressBar :value="0" /></div>',
});

export const ComValor25 = () => ({
  components: { ProgressBar },
  template: '<div><ProgressBar :value="25" /></div>',
});

export const ComValor50 = () => ({
  components: { ProgressBar },
  template: '<div><ProgressBar :value="50" /></div>',
});

export const ComValor75 = () => ({
  components: { ProgressBar },
  template: '<div><ProgressBar :value="75" /></div>',
});

export const ComValor125 = () => ({
  components: { ProgressBar },
  template: '<div><ProgressBar :value="125" /></div>',
});

export const ComValor200 = () => ({
  components: { ProgressBar },
  template: '<div><ProgressBar :value="200" /></div>',
});

export const ComValor550 = () => ({
  components: { ProgressBar },
  template: '<div><ProgressBar :value="550" /></div>',
});
