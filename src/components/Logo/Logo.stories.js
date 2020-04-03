import Logo from './Logo.vue';
import '@/utils/storybook-style.scss';

export default {
  title: 'Logo',
  component: Logo,
};

export const LogoMobile = () => ({
  components: { Logo },
  template: '<div class="header"><logo /></div>',
});

