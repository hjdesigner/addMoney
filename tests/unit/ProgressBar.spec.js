import { mount } from '@vue/test-utils';
import ProgressBar from '@/components/ProgressBar/ProgressBar.vue';

describe('Component ProgressBar', () => {
  it("should return the text R$ 0,00", () => {
    const wrapper = mount(ProgressBar, {
      propsData: {
        value: 0,
      },
    });
    expect(wrapper.find('.progress-bar-value p').text()).toEqual('R$ 0');
  });
  it("should return the text R$ 10,00", () => {
    const wrapper = mount(ProgressBar, {
      propsData: {
        value: 10,
      },
    });
    expect(wrapper.find('.progress-bar-value p').text()).toEqual('R$ 10,00');
  });
  it("should return the text R$ 250,00", () => {
    const wrapper = mount(ProgressBar, {
      propsData: {
        value: 250,
      },
    });
    expect(wrapper.find('.progress-bar-value p').text()).toEqual('R$ 250,00');
  });
  it("should return the aria-valuenow attribute equal to 50", () => {
    const wrapper = mount(ProgressBar, {
      propsData: {
        value: 50,
      },
    });
    expect(wrapper.find('.progress-bar-value').attributes('aria-valuenow')).toEqual('50');
  });
  it("should return the aria-valuenow attribute equal to 310", () => {
    const wrapper = mount(ProgressBar, {
      propsData: {
        value: 310,
      },
    });
    expect(wrapper.find('.progress-bar-value').attributes('aria-valuenow')).toEqual('310');
  });
  it("should return the style attribute with the value 12.5%", () => {
    const wrapper = mount(ProgressBar, {
      propsData: {
        value: 25,
      },
    });
    expect(wrapper.find('.progress-bar-value').attributes('style')).toEqual('width: 12.5%;');
  });
  it("should return the style attribute with the value 37.5%", () => {
    const wrapper = mount(ProgressBar, {
      propsData: {
        value: 75,
      },
    });
    expect(wrapper.find('.progress-bar-value').attributes('style')).toEqual('width: 37.5%;');
  });
});