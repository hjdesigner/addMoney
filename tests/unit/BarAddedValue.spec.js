import { mount } from '@vue/test-utils';
import BarAddedValue from '@/components/BarAddedValue/BarAddedValue.vue';

describe('Component BarAddedValue', () => {
  it("should return the text You didn't add anything", () => {
    const wrapper = mount(BarAddedValue, {
      propsData: {
        value: 0,
      },
    });
    expect(wrapper.find('p').text()).toEqual('Você não adicionou nada');
  });
  it("should return the text You already added R$ 10,00", () => {
    const wrapper = mount(BarAddedValue, {
      propsData: {
        value: 10,
      },
    });
    expect(wrapper.find('p').text()).toEqual('Você já adicionou R$ 10,00');
  });
  it("should return the text You already added R$ 25,50", () => {
    const wrapper = mount(BarAddedValue, {
      propsData: {
        value: 25.5,
      },
    });
    expect(wrapper.find('p').text()).toEqual('Você já adicionou R$ 25,50');
  });
});