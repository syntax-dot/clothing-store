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
  grid-template-columns: 50% 50%;
  gap: 12px;
}

.right {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  gap: 12px;
}

.right > div {
  height: 335px;
  width: 335px;
  background-color: #333;
}

.root > div {

  width: 100%;
  height: 100%;

}
</style>
