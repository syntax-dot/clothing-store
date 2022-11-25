<template>
  <div :class="$style.root">
    <BaseSelect/>
  </div>
</template>

<script lang="ts" setup>
import { BaseSelect } from '../BaseSelect'

</script>

<style module lang="scss">
.root {
  width: 100%;
  height: 100%;
}
</style>
