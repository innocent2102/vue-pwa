<template>
  <Camera></Camera>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Camera from '@/components/Camera/Camera.vue';

@Component({
  components: { Camera },
})
export default class CameraView extends Vue {}
</script>
