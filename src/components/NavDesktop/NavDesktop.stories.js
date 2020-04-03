import NavDesktop from './NavDesktop.vue';
import { storiesOf } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';
import '@/utils/storybook-style.scss';

storiesOf('NavDesktop', module)
  .addDecorator(StoryRouter())
  .add('default', () => NavDesktop);