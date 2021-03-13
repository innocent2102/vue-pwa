import { shallowMount } from '@vue/test-utils';
import Picture from './Picture.vue';

describe('Picture.vue', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(Picture, {});
  });

  it('Should be defined', () => {
    expect(wrapper.is(Picture)).not.toBeUndefined();
  });

  it('Should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
})
