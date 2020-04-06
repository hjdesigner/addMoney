import { mount } from '@vue/test-utils';
import Input from '@/components/Input/Input.vue';

describe('Component Input', () => {
  it('Should return a label', () => {
    const wrapper = mount(Input, {
      propsData: {
        text: 'Nome',
        name: 'name',
        type: 'text',
        value: '',
        placeholder: 'Nome do funcionário',
      },
    });
    expect(wrapper.contains('label')).toBe(true);
  });
  it('Should return a input', () => {
    const wrapper = mount(Input, {
      propsData: {
        text: 'Nome',
        name: 'name',
        type: 'text',
        value: '',
        placeholder: 'Nome do funcionário',
      },
    });
    expect(wrapper.contains('input')).toBe(true);
  });
  it('Should return the label with the text first Name', () => {
    const wrapper = mount(Input, {
      propsData: {
        text: 'Nome',
        name: 'name',
        type: 'text',
        value: '',
        placeholder: 'Nome do funcionário',
      },
    });
    expect(wrapper.find('label').text()).toEqual('Nome');
  });
  it('Should return the type of the input equal to text', () => {
    const wrapper = mount(Input, {
      propsData: {
        text: 'Nome',
        name: 'name',
        type: 'text',
        value: '',
        placeholder: 'Nome do funcionário',
      },
    });
    expect(wrapper.props('type')).toEqual('text');
  });
  it('Should return the placeholder equal to Epmloyee name', () => {
    const wrapper = mount(Input, {
      propsData: {
        text: 'Nome',
        name: 'name',
        type: 'text',
        value: '',
        placeholder: 'Nome do funcionário',
      },
    });
    expect(wrapper.props('placeholder')).toEqual('Nome do funcionário');
  });
  it('Should return the label form attribute equal to name', () => {
    const wrapper = mount(Input, {
      propsData: {
        text: 'Nome',
        name: 'name',
        type: 'text',
        value: '',
        placeholder: 'Nome do funcionário',
      },
    });
    expect(wrapper.find('label').attributes('form')).toEqual('name');
  });
  it('Should return the label form attribute equal to name', () => {
    const wrapper = mount(Input, {
      propsData: {
        text: 'Nome',
        name: 'name',
        type: 'text',
        value: '',
        placeholder: 'Nome do funcionário',
      },
    });
    expect(wrapper.find('input').attributes('id')).toEqual('name');
  });
});