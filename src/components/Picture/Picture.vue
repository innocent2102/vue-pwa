<template>
  <div class="pwa-picture">
    Picture Component
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Picture extends Vue {

}
</script>
<style scoped lang="scss">
@import 'Picture';
</style>
