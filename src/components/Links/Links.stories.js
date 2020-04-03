import Links from './Links.vue';
import { storiesOf } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';
import '@/utils/storybook-style.scss';


export const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/',
    name: 'About',
  }
]

storiesOf('Nav', module)
  .addDecorator(StoryRouter())
  .add('default', () => ({
    components: { Links },
    template: `
      <div class="nav-mobile">
        <Links :rotas="rotas" />
      </div>
    `,
    props: {
      rotas: {
        default: () => routes
      }
    }
  }));