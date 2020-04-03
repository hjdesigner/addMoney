import HeaderMobile from './HeaderMobile.vue';
import { storiesOf } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';
import '@/utils/storybook-style.scss';

storiesOf('HeaderMobile', module)
  .addDecorator(StoryRouter())
  .add('default', () => HeaderMobile);