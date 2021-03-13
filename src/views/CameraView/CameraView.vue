<template>
  <div>
    <WebCam @takePicture="takePicture()"></WebCam>
    <Picture></Picture>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Picture from '@/components/Picture/Picture.vue';
import WebCam from '@/components/WebCam/WebCam.vue';

enum ImageSmoothingQuality {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low'
}

@Component({
  components: { WebCam, Picture },
})
export default class CameraView extends Vue {
  takePicture (): void {
    const ratio = (window.innerHeight < window.innerWidth) ? 16 / 9 : 9 / 16;
    const picture = document.querySelector('canvas');
    const video = document.querySelector('video');
    picture.width = (window.innerWidth < 1280) ? window.innerWidth : 1280;
    picture.height = window.innerWidth / ratio;
    const ctx = picture.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = ImageSmoothingQuality.HIGH;
    ctx.drawImage(video, 0, 0, picture.width, picture.height)
  }
}
</script>
