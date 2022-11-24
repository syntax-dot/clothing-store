<template>
  <div :class="$style.root">
    <div :class="$style.logo">
      <h1>LOGO</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style module lang="scss">
@import "../../../css/variables.scss";
.root {
  width: 100%;
  height: 100%;
}

.logo {
  text-align: center;
}

.logo > h1 {
  color: $main-text-color;
  font-size: 1.4rem;
}
</style>
