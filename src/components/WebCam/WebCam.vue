<template>
  <div class="pwa-web-cam">
    <div class="pwa-web-cam__video-wrapper">
      <video id="pwa-web-cam__video" class="pwa-web-cam__video" autoplay></video>
      <button
        class="pwa-web-cam__snap-btn"
        @click="$emit('takePicture')"
      >Snap</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Camera extends Vue {
  mediaConstraints: MediaStreamConstraints = {
    video: {
      width: {
        min: 640,
        ideal: 1280,
        max: 1920
      },
      height: {
        min: 360,
        ideal: 720,
        max: 1080
      }
    }
  }

  created () {
    this.initCameraView()
  }

  initCameraView (): void {
    const hasMediaDevicesSupport = 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices;
    if (hasMediaDevicesSupport) {
      navigator.mediaDevices.getUserMedia(this.mediaConstraints).then(stream => {
        const videoPlayer = document.querySelector('#pwa-web-cam__video') as HTMLVideoElement;
          videoPlayer.srcObject = stream;
          videoPlayer.play();
      })
    } else {
      alert('Cannot get Media Devices');
    }
  }

}
</script>
<style scoped lang="scss">
@import 'WebCam';
</style>
