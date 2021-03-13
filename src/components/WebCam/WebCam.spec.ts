import { shallowMount } from '@vue/test-utils';
import WebCam from './WebCam.vue';

describe('WebCam.vue', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(WebCam, {});
  });

  it('Should be defined', () => {
    expect(wrapper.is(WebCam)).not.toBeUndefined();
  });

  it('Should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
})
