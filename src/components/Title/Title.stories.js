import Title from './Title.vue';
import '@/utils/storybook-style.scss';

export default {
  title: 'Title',
  component: Title,
};

export const TitleDefault = () => ({
  components: { Title },
  template: '<div><Title text="Pessoas que vão ganhar dinheiro" /></div>',
});