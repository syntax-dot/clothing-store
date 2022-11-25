<template>
  <div :class="$style.root">
    <ImageSelect :class="$style.select"/>

    <img :class="$style.image"
         src="./Pajamas_1.jpg"
         alt="PyjamasForGirls">
  </div>
</template>

<script lang="ts" setup>
import { ImageSelect } from '../ImageSelect'

</script>

<style module lang="scss">
.root {

}

.image {

}
</style>
