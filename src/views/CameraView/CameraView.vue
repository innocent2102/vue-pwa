<template>
  <div>
    <WebCam></WebCam>
    <Picture></Picture>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Picture from '@/components/Picture/Picture.vue';
import WebCam from '@/components/WebCam/WebCam.vue';

@Component({
  components: { WebCam, Picture },
})
export default class CameraView extends Vue {}
</script>
