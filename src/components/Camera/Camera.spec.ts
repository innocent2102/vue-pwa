import { shallowMount } from '@vue/test-utils';
import Camera from './Camera.vue';

describe('CameraView.vue', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallowMount(Camera, {});
  });

  it('Should be defined', () => {
    expect(wrapper.is(Camera)).not.toBeUndefined();
  });

  it('Should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
})
