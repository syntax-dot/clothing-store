<template>
  <div :class="$style.root">
    <div :class="$style.left">
      <div>*</div>
    </div>
    <div :class="$style.right">
      <div>*</div>
      <div>*</div>
      <div>*</div>
      <div>*</div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
.root {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 12px;
}

.right > div {
  max-height: 335px;
  max-width: 335px;
  background-color: #333;
}

.root > div {

  width: 100%;
  height: 100%;

}
</style>
