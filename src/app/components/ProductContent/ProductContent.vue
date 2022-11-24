<template>
  <div :class="$style.root">
    <ProductView/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  height: 100%;
}
</style>
