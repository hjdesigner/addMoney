import Logo from './Logo.vue';
import '@/utils/storybook-style.scss';

export default {
  title: 'Logo',
  component: Logo,
};

export const LogoDefault = () => ({
  components: { Logo },
  template: '<div class="header"><logo /></div>',
});

export const LogoMobile = () => ({
  components: { Logo },
  template: '<div class="header"><logo type="mobile" /></div>',
});

export const LogoDesktop = () => ({
  components: { Logo },
  template: '<div class="header"><logo type="desktop" /></div>',
});

